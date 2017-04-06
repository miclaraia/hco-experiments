################################################################
# Interface between the data structure and SWAP
# Serves data to SWAP

import progressbar
import copy

from swap.swap import SWAP, Classification
from swap.mongo import DB
from swap.mongo import Query
from swap.config import Config


class Control:

    def __init__(self, p0, epsilon, swap=None):
        self._db = DB()
        self._cfg = Config()
        self.classifications = self._db.classifications
        # self.subjects = self._db.subjects

        if swap is None:
            self.swap = SWAP(p0, epsilon)
        else:
            self.swap = swap

    def process(self):
        """
        Process all classifications in DB with SWAP

        Notes:
        ------
            Iterates through the classification collection of the
            database and proccesss each classification one at a time
            in the order returned by the db.
            Parameters like max_batch_size are hard-coded.
            Prints status.
        """

        # get classifications
        classifications = self.getClassifications()
        n_classifications = len(classifications)
        # n_classifications = self._n_classifications()

        # loop over classification cursor to process
        # classifications one at a time
        print("Start: SWAP Processing %d classifications" % n_classifications)

        n_class = 0
        with progressbar.ProgressBar(max_value=n_classifications) as bar:
            # Loop over all classifications of the query
            # Note that the exact size of the query might be lower than
            # n_classifications if not all classifications are being queried
            for cl in classifications:
                # process classification in swap
                cl = Classification.Generate(cl)
                self._delegate(cl)
                bar.update(n_class)
                n_class += 1

    # def _n_classifications(self):
    #     return self.classifications.count()

    def _delegate(self, cl):
        self.swap.processOneClassification(cl)

    def getClassifications(self):
        return self._db.getClassifications()

    def getSWAP(self):
        """ Returns SWAP object """
        return self.swap

    def setSWAP(self, swap):
        """
        Set the SWAP object
        """
        self.swap = swap

    # def getClassifications(self):
    #     """ Returns Iterator over all Classifications """

    #     # fields to project
    #     fields = ['user_name', 'subject_id', 'annotation', 'gold_label']

    #     # Define a query
    #     q = Query()
    #     q.project(fields)

    #     # perform query on classification data
    #     classifications = self.classifications.aggregate(q.build())

    #     return classifications


class MetaDataControl(Control):
    """ Calls SWAP to process classifications for specific meta data splits
    """

    def __init__(self, p0, epsilon, meta_data, meta_lower, meta_upper):
        # initialize control
        super().__init__(p0, epsilon)
        # meta data information
        self.meta_data = meta_data
        self.meta_lower = meta_lower
        self.meta_upper = meta_upper

    def getClassifications(self):
        """ Returns Iterator over all Classifications """

        # fields to project
        fields = ['user_name', 'subject_id', 'annotation', 'gold_label']

        # if meta data is requested
        if self.meta_data is not None:
            meta_data_field = 'metadata' + "." + self.meta_data
            fields.append('metadata')
            fields[fields.index('metadata')] = meta_data_field

        # Define a query
        q = Query()
        q.project(fields)

        # range query on metadata
        if self.meta_lower is not None and self.meta_upper is not None:
            q.match_range(meta_data_field, self.meta_lower, self.meta_upper)

        # perform query on classification data
        classifications = self.classifications.aggregate(q.build())

        return classifications


class DummySWAP:
    def __init__(self):
        self.data = {}

    def process(self):
        cursor = self.get_cursor()
        for item in cursor:
            score = item['votes'] / item['total']
            gold = item['gold']
            subject = item['_id']
            self.data[subject] = (gold, score)

    def get_cursor(self):
        cursor = DB().classifications.aggregate([
            {'$match': {'gold_label': {'$ne': -1}}},
            {'$group': {
                '_id': '$subject_id',
                'gold': {'$first': "$gold_label"},
                'total': {'$sum': 1},
                'votes': {'$sum': "$annotation"}}}])

        return cursor

    def export(self):
        data = {}
        for subject, item in self.data.items():
            data[subject] = {'gold': item[0], 'score': item[1]}

        return data

    def roc_export(self):
        data = []
        for item in self.data.values():
            data.append(item)

        return data
