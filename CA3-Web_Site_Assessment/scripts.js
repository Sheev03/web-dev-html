

var map = L.map('map').setView([55.458565, -4.629179], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.458565, -4.629179]).addTo(map)
   
    .openPopup();