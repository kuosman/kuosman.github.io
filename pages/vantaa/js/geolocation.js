var geolocation = {
	init: function() {
		var me = this;
		l.map.map.locate({setView: true, maxZoom: 17});
		l.map.map.on('locationfound', me.onLocationFound);
	},
	onLocationFound: function(e) {
    	var radius = e.accuracy / 2;
    	L.marker(e.latlng).addTo(l.map.map);
        	//.bindPopup("You are within " + radius + " meters from this point").openPopup();

    	L.circle(e.latlng, radius).addTo(l.map.map);
    }
};

jQuery(document).ready(function(){
	geolocation.init();
});