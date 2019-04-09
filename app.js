mapboxgl.accessToken = 'pk.eyJ1IjoiaHJvc2VtY21haG9uIiwiYSI6ImNqdTh2eDB6NjI5ajk0ZHNhb25kdGhrdHIifQ.5_ze2MlAP5E8gD3mxoJA6Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.50, 40], // starting position
    zoom: 8 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());