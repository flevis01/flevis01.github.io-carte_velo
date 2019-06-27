// JavaScript Document
let mymap = L.map('mapid').setView([36.7000, 137.21667], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmxldmlzIiwiYSI6ImNqdmhyajZzMjA2N2I0M3BudTkzZjYycTMifQ.dlZ4XzAxq2uUDN5bKhhZiA'
}).addTo(mymap);