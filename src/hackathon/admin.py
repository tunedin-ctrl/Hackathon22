# A class for administering the Kafka cluster.
from kafka import KafkaAdminClient, NewTopic

class KafkaAdmin():
    """
    Wrapper for KafkaAdminClient
    """
    def __init__(self):
        """
        Init KafkaAdminClient
        Deault port is 9092
        """
        self.admin_client = KafkaAdminClient(
            client_id = "hackathon-22"
        )

    def make_topic(self, topic: str):
        """
        Add a single topic to the admin client
        """
        topic_list = [
            NewTopic(name=topic, num_partitions=1, replication_factor=1)
        ]
        self.admin_client.create_topics(new_topics=topic_list, validate_only=False)

    def close(self):
        """
        Close admin client
        """
        self.admin_client.close()

    def get_admin(self):
        """
        Get admin client for further API calls to admin.
        See https://kafka-python.readthedocs.io/en/master/apidoc/KafkaAdminClient.html 
        """
        return self.admin_client

