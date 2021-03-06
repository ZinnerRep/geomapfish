# -*- coding: utf-8 -*-

import distutils.core
from pyramid.config import Configurator
from c2cgeoportal_geoportal import locale_negotiator, add_interface, INTERFACE_TYPE_NGEO
from c2cgeoportal_geoportal.lib.authentication import create_authentication
from mypackage_geoportal.resources import Root


def main(global_config, **settings):
    del global_config  # Unused

    """
    This function returns a Pyramid WSGI application.
    """
    config = Configurator(
        root_factory=Root, settings=settings,
        locale_negotiator=locale_negotiator,
        authentication_policy=create_authentication(settings)
    )

    # Workaround to not have the error: distutils.errors.DistutilsArgError: no commands supplied
    distutils.core._setup_stop_after = 'config'
    config.include('c2cgeoportal_geoportal')
    distutils.core._setup_stop_after = None

    config.add_translation_dirs('mypackage_geoportal:locale/')

    # scan view decorator for adding routes
    config.scan()

    # add the interfaces
    add_interface(config, 'desktop', INTERFACE_TYPE_NGEO, default=True)
    add_interface(config, 'mobile', INTERFACE_TYPE_NGEO)

    return config.make_wsgi_app()
