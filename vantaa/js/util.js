var util = {
    googleMaps: {
        _urls: {
            route: 'https://www.google.com/maps/dir/?api=1'
        },
        getRouteUrl: function (params) {
            var url = this._urls.route;
            Object.keys(params).forEach(function(key) {
                url += '&' + key + '='+ encodeURI(params[key]);
            });

            return url;
        }
    }
};