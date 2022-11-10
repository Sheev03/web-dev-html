let mapOptions = {
    center:[55.46282, -4.63025], 
    zoom:10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let marker = new L.marker([55.46282, -4.63025]);
marker.addTo(map)
