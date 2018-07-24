#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

setup(
    name='geomapfish_geoportal',
    version='1.0',
    description='geomapfish, a c2cgeoportal project',
    author='geomapfish',
    author_email='info@geomapfish.com',
    url='http://www.geomapfish.com/',
    install_requires=[
        'c2cgeoportal_geoportal',
        'c2cgeoportal_admin',
    ],
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    entry_points={
        'paste.app_factory': [
            'main = geomapfish_geoportal:main',
        ],
        'console_scripts': [
        ],
    },
)
