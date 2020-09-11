FROM ubuntu:18.04

ENV DEBIAN_FRONTEND noninteractive
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apt-get update --fix-missing -y && apt-get install -y \
  python3-dev \
  python3-pip \
  build-essential \
  gunicorn3 \
  python3-pycurl \
  tzdata \
  wget

RUN pip3 install --upgrade setuptools && pip3 install ez_setup

# copy python and configure
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install -r /app/requirements.txt

# override localtimezone to Chicago
ENV TZ=America/Chicago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# copy app code
COPY . /app
