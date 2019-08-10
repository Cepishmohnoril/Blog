FROM ubuntu:18.04

ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update
RUN apt-get install -y curl zip unzip git software-properties-common apt-utils


# PHP
RUN add-apt-repository ppa:ondrej/php
RUN apt-get update

RUN apt-get update && apt-get install -y \
	php7.2 \
	php7.2-curl \
	php7.2-fpm \
	php7.2-cli \
	php7.2-mysql \
	php7.2-json \
	php7.2-gd \
    php7.2-dev \
    php7.2-xml \
    php7.2-bcmath \
    php7.2-pgsql \
    php7.2-mbstring \
    php7.2-zip \
    php7.2-bz2 \
    php7.2-soap \
    php7.2-json \
    php7.2-intl \
    php7.2-imap \
    php7.2-imagick \
    php-memcached \
	composer

RUN command php -v
RUN command php -m