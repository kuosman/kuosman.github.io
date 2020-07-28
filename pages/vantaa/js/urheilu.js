var urheilu = {
	_templates: {
		popup: jQuery('<div>'+
			'<h3><i class="fa" aria-hidden="true"></i><span class="name"></span></h3>' +
			'<div><div class="label">Osoite:</div><div class="text osoite"></div><div class="clear"></div></div>'+
			'<div><div class="label">Linkki:</div><div class="text url"></div><div class="clear"></div></div>'+
			'<div><div class="label">Kuvaus:</div><div class="text description"></div><div class="clear"></div></div>'+
			'<div><div class="label">Status:</div><div class="text status"></div><div class="clear"></div></div>'+
			'</div>'
		)
	},
	_markers: {
		'kuntosali': {
			icon: 'dumbbell',
			prefix: 'fa',
			markerColor: 'darkpurple'
		},
		'uimaranta': {
			icon: 'ship',
			prefix: 'fa',
			markerColor: 'blue'
		}
	},
	_status: {
		KUNTOSALI: 'kuntosali',
		UIMARANTA: 'uimaranta'
	},
	_urheilu: [],
	init: function(){
		var me = this;
		me._addKuntosalit();
		me._addUimarannat();
		me._addMarkers();
		me._addLegenda();

	},
	_addLegenda: function(){
		var me = this;
		legenda.lisaaSelite({title: 'Kuntosali', icon: 'fa-dumbbell', color: 'darkpurple'}, 'Kuntosali <span class="small">('+jQuery.grep(me._urheilu, function(u) {return u.status === me._status.KUNTOSALI}).length +' kpl)</span>');
		legenda.lisaaSelite({title: 'Uimaranta', icon: 'fa-ship', color: 'blue'}, 'Uimaranta <span class="small">('+jQuery.grep(me._urheilu, function(u) {return u.status === me._status.UIMARANTA}).length +' kpl)</span>');
	},
	_addKuntosalit: function(){
		var me = this;

		me._urheilu.push({
			lon: 60.348385342,
			lat: 25.074732191,
			url:'http://www.korsogym.fi/',
			name:'KorsoGYM',
			osoite: 'Maakotkantie 6, 01450 Vantaa',
			status: me._status.KUNTOSALI,
			description: ''
		});
	},
	_addUimarannat: function(){
		var me = this;
		me._urheilu.push({
			lon: 60.357620021,
			lat: 25.090712575,
			url:'https://www.vantaa.fi/vapaa-aika/liikunta/ulkoliikuntapaikat/uimarannat_ja_avantouinti#Lepp%C3%A4korven%20maauimala',
			name:'Leppäkorven maauimala',
			osoite: 'Kontiotie 1, 01450 Vantaa',
			status: me._status.UIMARANTA,
			description: ''
		});
		me._urheilu.push({
			lon: 60.429877642,
			lat: 24.990287771,
			url:'https://www.tuusula.fi/sivu.tmpl?sivu_id=2439',
			name:'Rusutjärven uimaranta',
			osoite: 'Hiekkarannankuja 30, 04300 Tuusula',
			status: me._status.UIMARANTA,
			description: ''
		});
		me._urheilu.push({
			lon: 60.312740022,
			lat: 25.111549983,
			url:'https://www.vantaa.fi/vapaa-aika/liikunta/ulkoliikuntapaikat/uimarannat_ja_avantouinti#Kuusij%C3%A4rven%20ulkoilualue',
			name:'Kuusijärven ulkoilualue',
			osoite: 'Kuusijärventie 3, 01260 Vantaa',
			status: me._status.UIMARANTA,
			description: ''
		});
	},
	_addMarkers: function(){
		var me = this;
		var allMarkers = [];
		var markers = L.markerClusterGroup();

		jQuery.each(me._urheilu,function(index,urheilu){
			var marker = null;
			var markerOpt = me._markers[urheilu.status];

			if(l.useCluster) {
				marker = L.marker([urheilu.lon, urheilu.lat], {icon: L.AwesomeMarkers.icon(markerOpt)});
			} else {
				marker = L.marker([urheilu.lon, urheilu.lat], {icon: L.AwesomeMarkers.icon(markerOpt)}).addTo(l.map.map);
			}

			var markerContent = me._templates.popup.clone();
			markerContent.find('i.fa').addClass(markerOpt.prefix + '-' + markerOpt.icon);

			markerContent.find('.label').addClass(urheilu.status);
			for(var key in urheilu) {
				if(key === 'url') {
					markerContent.find('.' + key).html('<a href="' + urheilu[key] +'" target="_blank">Avaa tiedot</a>');
				} else if(key === 'osoite') {
                    markerContent.find('.' + key).html('<a href="'+ util.googleMaps.getRouteUrl({
                        origin: '',
                        destination: urheilu[key]
                    }) +'" target="_blank">' + urheilu[key] + '</a>');
                }
				else {
					markerContent.find('.' + key).html(urheilu[key]);
				}
			}
			marker.bindPopup(markerContent.prop('outerHTML'),
				{
					className: 'popup_urheilu ' + urheilu.status
				}
			);

			allMarkers.push(marker);

			if(l.useCluster === true) {
				markers.addLayer(marker);
			}
		});

		if(l.useCluster === true) {
			l.map.map.addLayer(markers);
		}
	}
};

jQuery(document).ready(function(){
	urheilu.init();
});
