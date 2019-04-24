from django.core.management.base import BaseCommand
from django.contrib.gis.geos import Point
import os
import pandas as pd
from src.api.models import Address

COMMAND_BASE = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = 'GeoLite2-City-Blocks-IPv4.csv'
DATA_FILE_PATH = os.path.join(COMMAND_BASE, 'data', DATA_FILE)


class Command(BaseCommand):
    def handle(self, *args, **options):
        """
        Ingests an IPv4 manifest file and writes it to the database.
        """
        df = pd.read_csv(DATA_FILE_PATH, usecols=['network', 'latitude', 'longitude'])
        start = 0
        size = len(df)
        batch_size = 1000
        while start < size:
            end = start + batch_size
            batch = df[start:end]
            addresses = []

            for _, row in batch.iterrows():
                coords = Point(float(row['longitude']), float(row['latitude']))
                new_address = Address(address=row['network'], coords=coords)
                addresses.append(new_address)

            Address.objects.bulk_create(addresses)
            start += batch_size
