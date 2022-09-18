function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Kausar on 06/10/2016.
 */
window.marker = null;

function initialize() {
    var _mapOptions;

    var map;

    var nottingham = new google.maps.LatLng(51.507351, -0.127758);

    var style = [{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{ "saturation": -100 }, { "lightness": -8 }, { "gamma": 1.18 }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{ "saturation": -100 }, { "gamma": 1 }, { "lightness": -24 }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "administrative",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "transit",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "road",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "administrative",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "landscape",
        "stylers": [{ "saturation": -100 }]
    }, {
        "featureType": "poi",
        "stylers": [{ "saturation": -100 }]
    }, {}];

    var mapOptions = (_mapOptions = {
        // SET THE CENTER
        center: nottingham,

        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 9,

        // SET THE BACKGROUND COLOUR
        backgroundColor: "#000"

    }, _defineProperty(_mapOptions, "zoom", 17), _defineProperty(_mapOptions, "panControl", false), _defineProperty(_mapOptions, "zoomControl", true), _defineProperty(_mapOptions, "mapTypeControl", false), _defineProperty(_mapOptions, "scaleControl", false), _defineProperty(_mapOptions, "streetViewControl", false), _defineProperty(_mapOptions, "overviewMapControl", false), _defineProperty(_mapOptions, "zoomControlOptions", {
        style: google.maps.ZoomControlStyle.LARGE
    }), _mapOptions);
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, { name: "Grayscale" });
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');

    //CREATE A CUSTOM PIN ICON
    var marker_image = 'plugins/google-map/images/marker.png';
    var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(40, 60));

    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'eventre'
    });
}
if ($('#map').length != 0) {
    google.maps.event.addDomListener(window, 'load', initialize);
}