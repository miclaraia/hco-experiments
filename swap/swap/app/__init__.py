
# Collection of infrastructures to run SWAP in an online state
# with Caesar

import swap.control
import swap.db.classifications as db
import swap.db
import swap.config as config
from swap.swap import SWAP, Classification
from swap.utils.golds import GoldGetter

import logging
from flask import Flask

logger = logging.getLogger(__name__)
app = Flask(__name__)


# Actions we might take to notify caesar

# retire subject

# post score changes

# change subject workflow


# API so Caesar can notify us

# receive classification
"""
    Data required in extraction:
    unique user identifier (whether that's user_name or user_id)
    subject identifier (subject_id, object_id)
    annotation
    gold label
        Should we rely on Caesar to maintain gold labels for us?
        Do we need to push new gold labels to Caesor if so?
        Might be better to maintain them in our local db

    Should store the incoming classificadtion in our db
        Do we need validation checks to ensure we don't have
        duplicate classificationsin our db
    Should then recalculate scores

    Do we then need to respond with the updated for that subject?
        Would it be better to just send our own asynchronous
        retirement message when we see fit?
"""


"""
TODO:
    Write online controller
        Listen as reducer and process incoming classifications
        Pre-process classifications already in database
    Write request/response schema
    Write new database methods
        To store incoming classifications in cl database
"""


@app.route('/reduce')
def reduce():
    pass


def classify(request):
    pass


def init(self):
    # Init controller and process classifications already in database
    pass


class OnlineControl(swap.control.Control):
    """
    Controller for SWAP in online mode
    """

    def __init__(self):
        super().__init__()

    def subjects_changed(self):
        # return subjects whose scores have changed
        pass

    def classify(self, classification):
        # Add classification from caesar
        logger.debug('Adding classification from network: %s',
                     str(classification))
        self.swap.classify(classification)

        subject = self.swap.subjects.get(classification.subject)
        return subject.score
