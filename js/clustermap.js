var map = L.map( 'map', {
  center: [46.8, -92.1],
  minZoom: 2,
  zoom: 7
});
 
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );
 
//var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );
 
var myIcon = L.icon({
  //iconUrl: myURL + 'images/pin24.png',
  //iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();
 
for ( var i = 0; i < markers.length; ++i )
{
  var popup = markers[i].city;
 
  var m = L.marker( [markers[i].latitude, markers[i].longitude]) //, {icon: myIcon} )
                  .bindPopup( popup );
 
  markerClusters.addLayer( m );
}
 
map.addLayer( markerClusters );