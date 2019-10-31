var latLng = L.latLng(41.386667, 2.17);

var map = L.map('mapid', {
	center: latLng,
	zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("Mis coordenadas son:<br>" + "<b>Lat: " + e.latlng.lat.toString() + " Lng: " + e.latlng.lng.toString()+ "</b>")
		.openOn(map);	
    var latLngs = [ popup.getLatLng() ];
    var markerBounds = L.latLngBounds(latLngs);
	map.fitBounds(markerBounds);	
}

map.on('click', onMapClick);
