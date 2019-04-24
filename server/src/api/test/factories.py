import factory
from factory.fuzzy import BaseFuzzyAttribute, FuzzyInteger
import random
from faker.providers import internet
from django.contrib.gis.geos import Point

factory.Faker.add_provider(internet)


class FuzzyPoint(BaseFuzzyAttribute):
    def fuzz(self):
        return Point(random.uniform(-180.0, 180.0),
                     random.uniform(-90.0, 90.0))


class AddressFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = 'api.Address'
        django_get_or_create = ('address',)

    address = factory.Faker('email')
    coords = FuzzyPoint()


class CoordsFreqFactory(factory.django.DjangoModelFactory):

    class Meta:
        model = 'api.CoordsFreq'
        django_get_or_create = ('address',)

    coords = FuzzyPoint()
    frequency = FuzzyInteger(0, 1000)
