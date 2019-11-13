define(["leaflet"], function(leaflet) {
	return {
		blueIcon: new leaflet.Icon.Default({}),
		redIcon: new leaflet.Icon({
		    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
		    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		    iconSize: [25, 41],
		    iconAnchor: [12, 41],
		    popupAnchor: [1, -34],
		    shadowSize: [41, 41]
		})
	};
});

