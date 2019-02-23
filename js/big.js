/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Google map code */

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(53.341965,-6.255019),
    zoom:12,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);

	