// Load google map
function loadScript() {
	$.ajax({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ6apCT_bhlnBNpUJxJ5_qVr4nHdL-FkQ&callback=initMap",
		dataType: "script"
	});
}

var map;
function initMap() {
    var latitute;
    var langiture;
	map = new google.maps.Map(document.getElementById('google-maps'), {
		center: {
            lat: 48.8716939, lng: 2.3707748 
        },
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 12
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 80
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "Lightness": -20
                    }
                ] 
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 1
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a3d62"
                    },
                    {
                        "lightness": 100
                    }
                ]
            }
        ]
	});

    if($(window).width() > 810 ){
        var ardorPin = {
            url: '/home/stefan/Desktop/HeavenMountains/img/'
        };

    }

    else{
        var ardorPin = {
              url: '/home/stefan/Desktop/HeavenMountains/img/'
        };
    }

    var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: ardorPin,
    map: map
    });
}

$(window).on('load', function() {
	setTimeout(function() {
        try{
            loadScript();
        }catch(err){
            console.log(err);
        }
	}, 4000);
});





//Smooth scroll
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Back to top button
$(function() {
  var btn = $('.backtotop');

  $(window).scroll(function() {
    if ($(window).scrollTop() < 100) {
      btn.addClass('hidden');
    } else {
      btn.removeClass('hidden');
    }
  });
});




//Hamburger menu
$(document).ready(function(){

    /* Hamburger menu animation */
    $('.open-button').click(function(){
      $(this).toggleClass('open');
    });

	 /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(".nav-menu").toggleClass('open');
    });
	
});

$(document).ready(function(){
    $(".nav-menu a").click(function(){
        $(".nav-menu").toggleClass('open');
        $(".open-button").removeClass('open');
    });
});

//FIXED NAVBAR
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

















