
import swap.config.config as _config
from swap.utils import Singleton
from pymongo import MongoClient

import atexit

import swap.config.logger as log
logger = log.get_logger(__name__)


class _DB:
    """
        DB

        The main interaction between the python code and the
        supporting mongo database. All calls to the database
        should be made from here.
    """

    def __init__(self):
        logger.info('opening mongo connection')
        config = Config()

        # Get database configuration from config file
        host = config.experiment_db.host
        db_name = config.experiment_db.name
        port = config.experiment_db.port

        self._client = MongoClient('%s:%d' % (host, port))
        self._db = self._client[db_name]
        self.batch_size = int(config.experiment_db.max_batch_size)

        self.data = self._db.data
        self.trials = self._db.trials

    def setBatchSize(self, size):
        self.batch_size = size

    def close(self):
        logger.info('closing mongo connection')
        self._client.close()


class _Config(_config.Config):

    experiment_db = _config.Object({
        'name': 'experimentsDB',
        'host': 'localhost',
        'port': 27017,
        'max_batch_size': 1e5,
    })

    trials = _config.Object({
        'keep_amount': 10,
        'cutoff': 0.96
    })


class DB(_DB, metaclass=Singleton):
    pass


class Config(_Config, metaclass=Singleton):
    pass


@atexit.register
def goodbye():
    DB().close()
