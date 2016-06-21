var map;
var marker;
var markers = [];
var infowindow;
var markerIcon = 'img/map-ico.png';
var points = [
  {lat: 50.531307, lng: 30.227661},
  {lat: 50.534901, lng: 30.776111},
  {lat: 50.385690, lng: 30.892239},
  {lat: 50.460310, lng: 29.807563},
  {lat: 50.501158, lng: 29.212713},
  {lat: 49.767457, lng: 24.424388},
  {lat: 49.715752, lng: 23.243534},
  {lat: 50.656870, lng: 26.296982},
  {lat: 50.426464, lng: 25.819077},
  {lat: 48.527242, lng: 35.341853},
  {lat: 50.025173, lng: 32.940142},
  {lat: 49.585711, lng: 34.589157}
];

function addMarker(lat, lng) {
  lat = parseFloat(lat);
  lng = parseFloat(lng);

  if(isNaN(lat) || isNaN(lng)) return;

  var marker_position = new google.maps.LatLng(lat, lng);

  marker = new google.maps.Marker({
    position: marker_position,
    icon: markerIcon
  });

  marker.setMap(this.map);
  markers.push(marker);
  return marker;
}

function clearMarker() {
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  console.log(markers);
}

function initMap() {
  var center = {lat: 50.468369, lng: 30.552774};

  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 10
  });

  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: "#00ab4e"
    }
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setOptions( { suppressMarkers: true } );

  var startInput         = document.getElementById('input-start');
  var endInput           = document.getElementById('input-end');
  var start_autocomplete = new google.maps.places.Autocomplete(startInput);
  var end_autocomplete   = new google.maps.places.Autocomplete(endInput);

  start_autocomplete.bindTo('bounds', map);
  end_autocomplete.bindTo('bounds', map);

  function calcRoute() {
    clearMarker();

    var request;
    var startPlace    = start_autocomplete.getPlace();
    var endPlace      = end_autocomplete.getPlace();
    var startPlaceId  = startPlace.place_id;
    var endPlaceId    = endPlace.place_id;
    var start         = { 'placeId': startPlaceId };
    var end           = { 'placeId': endPlaceId };

    request = {
      origin      : start,
      destination : end,
      travelMode  : google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);

        var routes = response.routes[0];
        var leg    = response.routes[ 0 ].legs[ 0 ];

        addMarker(leg.start_location.lat(), leg.start_location.lng());
        addMarker(leg.end_location.lat(), leg.end_location.lng());

        for(var j = 0; j < routes.overview_path.length; j++) {
          for(var key in points) {
            var dist = distance(routes.overview_path[j].lat(), routes.overview_path[j].lng(), points[key]);
            console.log(dist);

            if(dist < 30) {
              addMarker(points[key].lat, points[key].lng);
            }
          }
        }
      } else {
        alert("Directions query failed: " + status);
      }
    });
  }

  document.getElementById('submit-route').addEventListener('click', calcRoute);

  var infowindow = new google.maps.InfoWindow({
    content: document.getElementById('info-window')
  });

  function attachSecretMessage(marker, secretMessage) {
    var newInfowindow = secretMessage;

    marker.addListener('click', function() {
      newInfowindow.open(marker.get('map'), marker);
    });
  }
}

// Distance between original and destination
function distance(origLat, origLng, dest) {
  var LatKmInOneDeg = 111;
  var LngKmInOneDeg = 65;
  var result = Math.sqrt(Math.pow(((dest.lat - origLat)*LatKmInOneDeg), 2) + Math.pow(((dest.lng - origLng)*LngKmInOneDeg), 2));
  result = Math.round(result);
  return result;
}
