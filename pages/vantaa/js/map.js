jQuery(document).ready(function(){
	l.map.init();
});

l.map.init = function(){
	l.map.map = L.map('map');

	var layers = [
/*		{
			obj: new L.tileLayer.grayscale('http://{s}.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.png', {
				attribution: '<a href="http://kartat.kapsi.fi" target="_blank">kartat.kapsi.fi</a> | MML/2014',
				maxZoom: 18,
				subdomains: ['tile1', 'tile2']
			}),
			name: 'Peruskartta',
			showLayerSelection: true
		},
		{
			obj: new L.tileLayer.grayscale('http://{s}.kartat.kapsi.fi/ortokuva/{z}/{x}/{y}.png', {
				attribution: '<a href="http://kartat.kapsi.fi" target="_blank">kartat.kapsi.fi</a> | MML/2014',
				maxZoom: 18,
				subdomains: ['tile1', 'tile2']
			}),
			name: 'Ortokuva',
			showLayerSelection: true
		},*/
		{
			obj: new L.tileLayer.grayscale('http://tiles.kartat.kapsi.fi/taustakartta_3067/{z}/{x}/{y}.jpg', {
				attribution: '<a href="http://kartat.kapsi.fi" target="_blank">kartat.kapsi.fi</a> | MML/2025',
				maxZoom: 18,
				subdomains: ['tile1', 'tile2']
			}),
			name: 'Taustakartta',
			default: true,
			showLayerSelection: true
		},
		{
			obj: new L.tileLayer.wms('https://avoinapi.vaylapilvi.fi/vaylatiedot/ows?', {
				layers: 'ratatiedot:locationtracks_simplified',
				format: 'image/png',
    			transparent: true,
    			opacity:0.7
			}),
			name: 'Rataverkko',
			default: true,
			showLayerSelection: false
		}/*,
		{
			obj: new L.tileLayer.wms('https://extranet.liikennevirasto.fi/inspirepalvelu/avoin/wms?', {
				layers: 'rautatieliikennepaikka',
				format: 'image/png',
    			transparent: true
			}),
			name: 'Rautatieliikennepaikka',
			default: true,
			showLayerSelection: false
		}*/
	];

	var minimapLayer = new L.tileLayer.grayscale('http://tiles.kartat.kapsi.fi/taustakartta/{z}/{x}/{y}.jpg', {
		attribution: '<a href="http://kartat.kapsi.fi" target="_blank">kartat.kapsi.fi</a> | MML/2018',
		maxZoom: 18,
		subdomains: ['tile1', 'tile2']
	});

	var layerControl = {};
	for(var i=0;i<layers.length;i++){
		var layer = layers[i];
		if(layer.default){
			l.map.map.addLayer(layer.obj);
		}
		if(layer.showLayerSelection) {
			layerControl[layer.name] = layer.obj;
		}
	}
	l.map.map.setView(new L.LatLng(l.center.lat, l.center.lon), 12);

	L.extend(L.Control.MiniMap.prototype,{
		hideText: 'Pienennä',
		showText: 'Suurenna'
	});
	var miniMap = new L.Control.MiniMap(minimapLayer, {toggleDisplay:true}).addTo(l.map.map);

	L.control.mousePosition({emptyString: 'Ei saatavilla'}).addTo(l.map.map);
	var measure = new L.Control.MeasureControl({
		//shapeOptions: {
			polyline: {
                shapeOptions: {
                    color: '#f357a1',
                    weight: 10
                }
            }
		//}
	}).addTo(l.map.map);

	jQuery(document).on('geolocation.position', function(evt,position) {
		l.map.map.setView(new L.LatLng(position.lat, position.lon), 17);
	});
};
