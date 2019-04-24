from django.urls import reverse
from nose.tools import eq_
from rest_framework.test import APITestCase
from rest_framework import status


class TestCoordsFreqViews(APITestCase):
    def setUp(self):
        self.url = reverse('address-list')

    def test_get_request_200(self):
        response = self.client.get(self.url)
        eq_(response.status_code, status.HTTP_200_OK)
