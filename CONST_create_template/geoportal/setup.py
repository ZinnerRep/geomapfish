#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

setup(
    name='mypackage_geoportal',
    version='1.0',
    description='mypackage, a c2cgeoportal project',
    author='mypackage',
    author_email='info@mypackage.com',
    url='http://www.mypackage.com/',
    install_requires=[
        'c2cgeoportal_geoportal',
        'c2cgeoportal_admin',
    ],
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    entry_points={
        'paste.app_factory': [
            'main = mypackage_geoportal:main',
        ],
        'console_scripts': [
        ],
    },
)
