% if debug:
    <%!
    from jstools.merge import Merger
    %>
    <%
    jsbuild_cfg = request.registry.settings.get('jsbuild_cfg')
    jsbuild_root_dir = request.registry.settings.get('jsbuild_root_dir')
    %>
    % for script in Merger.from_fn(jsbuild_cfg.split(), root_dir=jsbuild_root_dir).list_run(['xapi.js', 'lang-%s.js' % lang]):
document.write('<script type="text/javascript" src="'
        + "${request.static_url(script.replace('/', ':', 1))}" + '"></script>');
    % endfor

document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/core/src/theme/reset.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/editor.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/pivotgrid.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/menu.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/panel.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/grid.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/debug.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/qtips.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/dd.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/form.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/resizable.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/toolbar.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/slider.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/combo.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/layout.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/dialog.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/core.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/button.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/progress.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/tabs.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/box.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/borders.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/date-picker.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/tree.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/window.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/visual/list-view.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/editor.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/pivotgrid.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/menu.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/panel.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/grid.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/debug.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/qtips.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/dd.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/form.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/resizable.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/toolbar.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/panel-reset.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/slider.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/combo.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/layout.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/dialog.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/core.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/button.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/progress.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/tabs.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/box.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/borders.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/date-picker.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/tree.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/window.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/structure/list-view.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/css/xtheme-gray.css')}" + '" />');

document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/openlayers/theme/default/style.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/geoext/resources/css/gxtheme-gray.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/geoext.ux/ux/Measure/resources/css/measure.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/gxp/src/theme/all.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/lib/cgxp/core/src/theme/all.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/css/proj-map.css')}" + '" />');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/css/proj-widgets.css')}" + '" />');
% else:
document.write('<scr' + 'ipt type="text/javascript" src="'
        + "${request.static_url('mypackage_geoportal:static/build/xapi.js', _query=url_params)}" + '"></scr' + 'ipt>');
document.write('<scr' + 'ipt type="text/javascript" src="'
        + "${request.static_url('mypackage_geoportal:static/build/lang-%s.js' % lang, _query=url_params)}" + '"></scr' + 'ipt>');
document.write('<link rel="stylesheet" type="text/css" href="'
        + "${request.static_url('mypackage_geoportal:static/build/xapi.css', _query=url_params)}" + '" />');
% endif

mypackage = {};
mypackage.Map = function(config) {
    if (!this.initMap) {

        /*
         * Initialize the API.
         * - Set globals
         * - Create child class
         */

        Ext.QuickTips.init();
        Ext.BLANK_IMAGE_URL = "${request.static_url('mypackage_geoportal:static/lib/cgxp/ext/Ext/resources/images/default/s.gif') | n}";
        OpenLayers.Number.thousandsSeparator = ' ';
        OpenLayers.DOTS_PER_INCH = 96;
        OpenLayers.ImgPath = "${request.static_url('mypackage_geoportal:static/lib/cgxp/core/src/theme/img/ol/') | n}";
        OpenLayers.Lang.setCode("${lang}");
        GeoExt.Lang.set("${lang}");

        OpenLayers.inherit(mypackage.Map, cgxp.api.Map);

        mypackage.Map.prototype.initMap = function() {
            <%include file="mapconfig.js"/>
            var config = this.adaptConfigForViewer(mapConfig);
            <%include file="viewer.js"/>
            viewer.on('ready', this.onViewerReady.createDelegate(this, [viewer]));
        };

        return new mypackage.Map(config);
    }

    this.wmsURL = "${request.route_url('mapserverproxy') | n}";
    this.queryableLayers = ${queryable_layers | n};
    return cgxp.api.Map.call(this, config);
};
