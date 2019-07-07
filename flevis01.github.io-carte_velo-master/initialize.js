let mymap = L.map('mapid').setView([36.7000, 137.21667], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmxldmlzIiwiYSI6ImNqdmhyajZzMjA2N2I0M3BudTkzZjYycTMifQ.dlZ4XzAxq2uUDN5bKhhZiA'
}).addTo(mymap);

let ajax = new Ajaxget();
ajax.ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=toyama", function (reponse){
	let infos = JSON.parse(reponse);	
	for (let i=0; i < infos.length; i++){
		console.log(infos[i]);
	let station = new Station(infos[i].address,infos[i].status,infos[i].totalStands.capacity,infos[i].totalStands.availabilities.bikes);
	console.log(station.decrire());
	let position = new Position(infos[i].position.latitude, infos[i].position.longitude);
		console.log(position.afficher())
	}
	
});

