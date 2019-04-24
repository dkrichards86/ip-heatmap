# IP Heatmap Backend
The IP Heatmap backend exposes a REST API providing locational information for
IP addresses. At present, the platform only displays IPv4 addresses, though it is
capable of supporting IPv6.

This project uses [Django](https://www.djangoproject.com/) with
[Django REST Framework](https://www.django-rest-framework.org) and was bootstrapped
using [cookiecutter-django-rest](https://github.com/agconti/cookiecutter-django-rest).

## API Information
The API exposes a single endpoint for querying IP addresses by an optional bounding
box. The endpoint is found at `/api/v1/addresses`.

With no bounding box, the endpoint returns all IP addresses. Specifying a bounding
box limits the IP addresses to those falling within the bounds of the box.

Bounding boxes are identified by the query paramater `in_bbox` and contain a comma
separated list of coordinates in the shape of (lon1, lat1, lon2, lat2).
Calling `/api/v1/addresses?in_bbox=-82.7,35.6,-79.0,36.0` will return all IP
addresses that fall within a bounding box with corners in Asheville, NC (35.6, -82.7)
and Durham, NC (36.0, -79.0).
