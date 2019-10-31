var latLng = L.latLng(41.386667, 2.17);

var map = L.map('mapid', {
	center: latLng,
	zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([41.3869144, 2.1660002]).addTo(map);

marker.bindPopup('<b><span style="font-size:15px;">Restaurant Centfocs</span></b><br><br>Restaurante Mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona');

