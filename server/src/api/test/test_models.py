from django.test import TestCase
from django.forms.models import model_to_dict
from ..models import Address, CoordsFreq
from .factories import AddressFactory, CoordsFreqFactory


class TestAddressModels(TestCase):
    def setUp(self):
        address_attrs = model_to_dict(AddressFactory.build())
        self.address = Address(**address_attrs)

    def test_address_creation(self):
        self.assertTrue(isinstance(self.address, Address))


class TestCoordsFreqModel(TestCase):
    def setUp(self):
        coord_freq_attrs = model_to_dict(CoordsFreqFactory.build())
        self.freqs = CoordsFreq(**coord_freq_attrs)

    def test_coords_freq_creation(self):
        self.assertTrue(isinstance(self.freqs, CoordsFreq))
