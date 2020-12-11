var colors = {
    _popupColors: {
        'red': '#c93a27',
        'orange': '#F69730',
        'blue': '#38a9db'
    },
    _colors: [
        'red',
        'orange',
        'blue',
        'green',
        'purple',
        'pink',
        'beige',
        'gray',
        'white',
        'black',
        'darkred',
        'darkblue',
        'darkgreen',
        'lightred',
        'lightblue',
        'lightgreen',
        'darkpurple',
        'cadetblue',
        'lightgray'],
    _usedColorIndex: null,

    getColor: function(index){
        var me = this;

        if(typeof index === 'number') {
            return me._colors[index] || me._colors[0];
        }
        if(typeof me._usedColorIndex !== 'number') {
            me._usedColorIndex = 0;
        } else if(me._usedColorIndex + 1 >me._colors.length-1){
            me._usedColorIndex = null;
            return me._getColor();
        } else {
            me._usedColorIndex++;
        }
        return me._colors[me._usedColorIndex];
    },
    getPopupColor: function(colorName) {
        var me = this;
        return me._popupColors[colorName];
    }
};

var poi = {
    _templates: {
        popup: jQuery('<div>'+
            '<h3><i class="fa" aria-hidden="true"></i><span class="name"></span></h3>' +
            '<div><div class="label">Osoite:</div><div class="text osoite"></div><div class="clear"></div></div>'+
            '<div><div class="label">Kuvaus:</div><div class="text description"></div><div class="clear"></div></div>'+
            '<div><div class="label">URL:</div><div class="text url">-</div><div class="clear"></div></div>'+
            '</div>'
        )
    },
    _markers: {
        'kauppa': {
            icon: 'shopping-cart',
            prefix: 'fa',
            markerColor: colors.getColor(0),
            name: 'Kauppa'
        },
        'kamera': {
            icon: 'camera',
            prefix: 'fa',
            markerColor: colors.getColor(1),
            name: 'Kamera'
        }
    },
    _status: {
        KAUPPA: 'kauppa',
        KAMERA: 'kamera'
    },
    _poi: [],
    init: function(){
        var me = this;
        me._addPoi();
        me._addMarkers();
        me._addLegenda();

    },
    _addLegenda: function(){
        var me = this;
        if (me._poi.length === 0) {
            return;
        }
        if(legenda && typeof legenda.lisaaSelite === 'function') {
            var poiCount = function(key) {
                var pois = jQuery.grep(me._poi, function(poi, index) {
                    return poi.status === key;
                });
                return pois.length;
            };
            for(var key in me._markers) {
                var marker = me._markers[key];
                var count = poiCount(key);

                var countText = '';
                if(count > 1) {
                    countText = ' <span class="small">(' + count + ' kpl)</span>';
                }
                if(count > 0) {
                    legenda.lisaaSelite({title: marker.name, icon: marker.prefix + '-' + marker.icon, color: marker.markerColor}, marker.name + countText);
                }
            }
        }
    },
    _addPoi: function(){
        var me = this;

        /*
        me._poi.push({
            lon:60.35118781161213,
            lat:25.07961237060216,
            name:'S-market Korson asema',
            osoite: 'Metsolantie 2, 01450 Vantaa',
            status: me._status.KAUPPA,
            description: 'S-market Korson asema'
        });

        me._poi.push({
            lon:60.35030301279745,
            lat:25.079105469456124,
            name:'K-supermarket Korso',
            osoite: 'Minkkikuja 4, 01450 Vantaa',
            status: me._status.KAUPPA,
            description: 'K-supermarket Korso'
        });

        me._poi.push({
            lon:60.34871331340244,
            lat:25.075851768621302,
            name:'S-market Korso',
            osoite: 'Maakotkantie 19, 01450 Vantaa',
            status: me._status.KAUPPA,
            description: 'S-market Korso'
        });

        me._poi.push({
            lon:60.35485148833242,
            lat:25.04994328287751,
            name:'K-market Vierumäki',
            osoite: 'Riskiläkuja 2 A, 01450 Vantaa',
            status: me._status.KAUPPA,
            description: 'K-market Vierumäki'
        });

        me._poi.push({
            lon:60.34535362355496,
            lat:25.10595113146053,
            name:'Lidl',
            osoite: 'Murmelikuja 11, 01480 Vantaa',
            status: me._status.KAUPPA,
            description: 'Lidl'
        });
        */

    },
    _addMarkers: function(){
        var me = this;
        var allMarkers = [];

        jQuery.each(me._poi,function(index,poi){
            var markerOpt = me._markers[poi.status];
            var marker = L.marker([poi.lon, poi.lat], {icon: L.AwesomeMarkers.icon(markerOpt)  }).addTo(l.map.map);

            var markerContent = me._templates.popup.clone();

            markerContent.find('.label').addClass(poi.status);
            markerContent.find('i.fa').addClass(markerOpt.prefix + '-' + markerOpt.icon);
            var popupColor = colors.getPopupColor(me._markers[poi.status].markerColor);
            var status = null;
            var isUrl = false;
            for(var key in poi) {
                if(key === 'url') {
                    markerContent.find('.' + key).html('<a href="' + poi[key] +'" target="_blank">Avaa tiedot</a>');
                } else if(key === '_popupColor') {
                    popupColor = poi[key];
                } else if(key === 'status') {
                    status = poi[key];
                } else if(key === 'osoite') {
                    markerContent.find('.' + key).html('<a href="'+ util.googleMaps.getRouteUrl({
                        origin: '',
                        destination: poi[key]
                    }) +'" target="_blank">' + poi[key] + '</a>');
                } else {
                    markerContent.find('.' + key).html(poi[key]);
                }
            }
            marker.bindPopup(markerContent.prop('outerHTML'),
                {
                    className: 'popup_poi ' + poi.status
                }
            );

            marker.on('popupopen', function(popup){
                jQuery('.leaflet-popup.popup_poi.'+ status).find('div.leaflet-popup-content-wrapper').css('background-color', popupColor);
                jQuery('.leaflet-popup.popup_poi.'+ status).find('div.leaflet-popup-tip').css('background-color', popupColor);

            });

            allMarkers.push(marker);

        });
    }
};

jQuery(document).ready(function(){
    poi.init();
});