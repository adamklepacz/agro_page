// Gallery scripts

 $(document).ready(function(){
  $('ul.first').bsPhotoGallery({
    "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal" : true
  });
});

// Map scripts

function initMap() {
  var position = {lat: 51.489228, lng: 17.984759};
  var map = new google.maps.Map(document.getElementById('map'), {
	scrollwheel: false,
    zoom: 13,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
}
