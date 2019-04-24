FROM python:3.6.8
LABEL maintainer="Keith Richards"
LABEL version="1.0.0"
LABEL description="Python 3.6.8 with GIS binaries"

RUN apt-get update && \
	apt-get install -y binutils libproj-dev && \
    apt-get install -y python3-gdal && \
    apt-get install -y gdal-bin

WORKDIR /opt/geolibs

ARG OSGEO_BASE_URL=http://download.osgeo.org

# Install Geometry Engine, Open Source
ARG GEOS_VERSION=3.7.0
ARG GEOS_URL=${OSGEO_BASE_URL}/geos/geos-${GEOS_VERSION}.tar.bz2
RUN mkdir -p /tmp/geos \
    && wget ${GEOS_URL} \
    && tar -C /tmp -xjf geos-${GEOS_VERSION}.tar.bz2 \
    && rm geos-${GEOS_VERSION}.tar.bz2 \
    && cd /tmp/geos-${GEOS_VERSION} \
    && ./configure && make && make install && ldconfig \
    && cd /opt/geolibs \
    && rm -rf /tmp/geos-${GEOS_VERSION}

# Install PROJ.4 Cartographic Projections Library
ARG PROJ_VERSION=5.2.0
ARG PROJ_URL=${OSGEO_BASE_URL}/proj/proj-${PROJ_VERSION}.tar.gz
ARG PROJ_DATUM_VERSION=1.8
ARG PROJ_DATUM_URL=${OSGEO_BASE_URL}/proj/proj-datumgrid-${PROJ_DATUM_VERSION}.tar.gz
RUN mkdir -p /tmp/proj \
    && wget ${PROJ_URL} \
    && wget ${PROJ_DATUM_URL} \
    && tar -C /tmp -xzf proj-${PROJ_VERSION}.tar.gz \
    && cd /tmp/proj-${PROJ_VERSION}/nad \
    && tar -xzf /opt/geolibs/proj-datumgrid-${PROJ_DATUM_VERSION}.tar.gz \
    && rm /opt/geolibs/proj-${PROJ_VERSION}.tar.gz \
    && rm /opt/geolibs/proj-datumgrid-${PROJ_DATUM_VERSION}.tar.gz \
    && cd /tmp/proj-${PROJ_VERSION} \
    && ./configure && make && make install && ldconfig \
    && cd /opt/geolibs \
    && rm -rf /tmp/proj-${PROJ_VERSION}

# Install Geospatial Data Abstraction Library
ARG GDAL_VERSION=2.4.1
ARG GDAL_URL=${OSGEO_BASE_URL}/gdal/${GDAL_VERSION}/gdal-${GDAL_VERSION}.tar.gz
RUN mkdir -p /tmp/gdal \
    && wget ${GDAL_URL} \
    && tar -C /tmp -xzf gdal-${GDAL_VERSION}.tar.gz \
    && rm gdal-${GDAL_VERSION}.tar.gz \
    && cd /tmp/gdal-${GDAL_VERSION} \
    && ./configure && make && make install && ldconfig \
    && cd /opt/geolibs \
    && rm -rf /tmp/gdal-${GDAL_VERSION}
