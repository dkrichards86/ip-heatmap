from rest_framework import serializers
from .models import CoordsFreq


class CoordFreqSerializer(serializers.ModelSerializer):
    """
    Serialize an IP address Coordinate Frequency pair
    """
    class Meta:
        model = CoordsFreq
        fields = ('coords', 'frequency')
