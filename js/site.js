const map = L.map('map').setView([-5.0000, 25.0000], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);


L.marker([40.790886, -73.974709]).addTo(map)
.bindPopup("Broadway")
.openPopup();
