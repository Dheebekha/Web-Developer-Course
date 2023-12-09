let map;

function initMap() {
    const centerCordinates = {lat:-34.397,lng:150.644}
    map= new google.maps.Map(document.getElementById("map"),{
        center:centerCordinates,
        zoom: 12,
    })
    //add marker to the map
    const marker = new google.maps.Marker({
        position:centerCordinates,
        map:map,
        title:"Google map"
    })
}