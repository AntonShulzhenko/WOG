function initMap() {
  var origin_place_id = null;
  var destination_place_id = null;
  var map = new google.maps.Map(document.getElementById('map'), {
    // mapTypeControl: false,
    center: {lat: 49.01, lng: 31.28},
    zoom: 6
  });
  var places = [
    {lat: 50.531307, lng: 30.227661},
    {lat: 50.534901, lng: 30.776111},
    {lat: 50.385690, lng: 30.892239},
    {lat: 50.460310, lng: 29.807563},
    {lat: 50.501158, lng: 29.212713},
    {lat: 49.767457, lng: 24.424388},
    {lat: 49.715752, lng: 23.243534}
  ];

  // Marker
  var img = 'img/map-ico.png';
  var origin_marker = new google.maps.Marker({
    icon: img
  });
  var destination_marker = new google.maps.Marker({
    icon: img
  });
  var originMarker;
  var destinationMarker;

  origin_marker.setMap(map);
  destination_marker.setMap(map);
  // /Marker

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);

  var origin_input = document.getElementById('input-start');
  var destination_input = document.getElementById('input-end');

  var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
  origin_autocomplete.bindTo('bounds', map);
  var destination_autocomplete = new google.maps.places.Autocomplete(destination_input);
  destination_autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow({
    content: document.getElementById('info-window')
  });

  origin_autocomplete.addListener('place_changed', function() {
    var place = origin_autocomplete.getPlace();
    var placeLat = place.geometry.location.lat();
    var placeLng = place.geometry.location.lng();

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    // origin_marker.setPosition(place.geometry.location);

    for(var i = 0; i < places.length; i++) {
      var dist = distance(placeLat, placeLng, places[i]);

      if(dist < 60) {
        originMarker = new google.maps.Marker({
          map: map,
          icon: img,
          position: new google.maps.LatLng(places[i].lat, places[i].lng)
        });
      }
    }
    origin_place_id = place.place_id;
  });

  destination_autocomplete.addListener('place_changed', function() {
    var place = destination_autocomplete.getPlace();
    var placeLat = place.geometry.location.lat();
    var placeLng = place.geometry.location.lng();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    // destination_marker.setPosition(place.geometry.location);

    for(var i = 0; i < places.length; i++) {
      var dist = distance(placeLat, placeLng, places[i]);

      if(dist < 60) {
        destinationMarker = new google.maps.Marker({
          map: map,
          icon: img,
          position: new google.maps.LatLng(places[i].lat, places[i].lng)
        });
      }
    }

    // If the place has a geometry, store its place ID and route if we have
    // the other place ID
    destination_place_id = place.place_id;
  });

  function attachSecretMessage(marker, secretMessage) {
    var newInfowindow = secretMessage;

    marker.addListener('click', function() {
      newInfowindow.open(marker.get('map'), marker);
    });
  }

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

  // Distance between original and destination
  function distance(origLat, origLng, dest) {
    var LatKmInOneDeg = 111;
    var LngKmInOneDeg = 65;
    var result = Math.sqrt(Math.pow(((dest.lat - origLat)*LatKmInOneDeg), 2) + Math.pow(((dest.lng - origLng)*LngKmInOneDeg), 2));
    result = Math.round(result);
    return result;
  }
}
