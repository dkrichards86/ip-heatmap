from django.contrib.gis.db import models
from django_pgviews import view as pg

COORD_FREQUENCY_SQL = '''
SELECT coords, count(coords) as frequency
FROM api_address
GROUP BY coords;
'''


class Address(models.Model):
    """
    Model representing an individual IP Address
    """
    # protocol 'both' enables ipv6 support should we add it in the future.
    address = models.GenericIPAddressField(protocol='both', unpack_ipv4=False,
                                           primary_key=True)
    coords = models.PointField(geography=True, spatial_index=True, null=True,
                               blank=True)

    def __str__(self):
        return self.address

    class Meta:
        ordering = ['address']


class CoordsFreq(pg.MaterializedView):
    """
    Aggregate view of IP Address location frequencies
    """
    coords = models.PointField(geography=True, spatial_index=True, null=False,
                               blank=False, primary_key=True)
    frequency = models.PositiveIntegerField()

    sql = COORD_FREQUENCY_SQL

    class Meta:
        managed = False
        ordering = ['-frequency']
