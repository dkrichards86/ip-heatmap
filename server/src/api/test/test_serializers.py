from django.test import TestCase
from django.forms.models import model_to_dict
from nose.tools import ok_
from .factories import CoordsFreqFactory
from ..serializers import CoordFreqSerializer


class TestCoordFreqSerializer(TestCase):

    def setUp(self):
        self.freq_data = model_to_dict(CoordsFreqFactory.build())

    def test_serializer_with_valid_data(self):
        serializer = CoordFreqSerializer(data=self.freq_data)
        ok_(serializer.is_valid())
