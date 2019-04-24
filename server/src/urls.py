from django.conf import settings
from django.urls import path, re_path, reverse_lazy
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic.base import RedirectView
from .api.views import CoordFreqView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/addresses', CoordFreqView.as_view(), name='address-list'),
    re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=False)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
