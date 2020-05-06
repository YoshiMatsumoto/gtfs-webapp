
mapboxgl.accessToken = 'pk.eyJ1IjoieW9zbXQiLCJhIjoiY2s5Ynh1dTZrMHF2ZzNtbzAydjAxa280aiJ9.8_-g77X3v6qHnG3cw1CmLA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
// your code that shows the map div
$('#map').show();

// invalidate the size of your map
map.invalidateSize();
