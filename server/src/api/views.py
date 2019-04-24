from rest_framework.generics import ListAPIView
from rest_framework_gis.filters import InBBoxFilter
from .models import CoordsFreq
from .serializers import CoordFreqSerializer


class CoordFreqView(ListAPIView):
    """
    Get a list of IP address location frequencies within a bounding box
    """
    queryset = CoordsFreq.objects.all()
    serializer_class = CoordFreqSerializer
    bbox_filter_field = 'coords'
    filter_backends = (InBBoxFilter, )
    bbox_filter_include_overlapping = True
