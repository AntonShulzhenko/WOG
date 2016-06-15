function initMap() {
  var origin_place_id = null;
  var destination_place_id = null;
  var map = new google.maps.Map(document.getElementById('map'), {
    // mapTypeControl: false,
    center: {lat: 49.01, lng: 31.28},
    zoom: 6
  });

  // Marker
  var img = 'img/map-ico.png';
  var origin_marker = new google.maps.Marker({
    icon: img
  });
  var destination_marker = new google.maps.Marker({
    icon: img
  });
  origin_marker.setMap(map);
  destination_marker.setMap(map);
  // /Marker

  // Info Window
  var infowindow = new google.maps.InfoWindow({
    content: document.getElementById('info-window')
    // content: document.getElementById('info-table')
    // maxWidth: 300
  });

  origin_marker.addListener('click', function() {
    infowindow.open(map, origin_marker);
  });

  destination_marker.addListener('click', function() {
    infowindow.open(map, destination_marker);
  });
  // /Info Window

  // Polyline
  var poly = new google.maps.Polyline({
    strokeColor: '#00ab4d',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map,
    fillColor: '#00ab4d'
  });
  // /Polyline

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);

  var origin_input = document.getElementById('input-start');
  var destination_input = document.getElementById('input-end');
  var modes = document.getElementById('mode-selector');

  var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
  origin_autocomplete.bindTo('bounds', map);
  var destination_autocomplete = new google.maps.places.Autocomplete(destination_input);
  destination_autocomplete.bindTo('bounds', map);

  origin_autocomplete.addListener('place_changed', function() {
    var place = origin_autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    origin_marker.setPosition(place.geometry.location);

    // If the place has a geometry, store its place ID and route if we have
    // the other place ID
    origin_place_id = place.place_id;
  });

  destination_autocomplete.addListener('place_changed', function() {
    var place = destination_autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    destination_marker.setPosition(place.geometry.location);

    // If the place has a geometry, store its place ID and route if we have
    // the other place ID
    destination_place_id = place.place_id;
  });

  document.getElementById('submit-route').addEventListener('click', function() {
    route(origin_place_id, destination_place_id, directionsService, directionsDisplay);
  });

  function route(origin_place_id, destination_place_id, directionsService, directionsDisplay) {
    if (!origin_place_id || !destination_place_id) {
      return;
    }
    directionsService.route({
      origin: {'placeId': origin_place_id},
      destination: {'placeId': destination_place_id},
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
