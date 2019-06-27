function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", "https://api.jcdecaux.com/vls/v3/stations?contract=toyama&apiKey=dc7082d58f08aa7c16d08eabbf3b04e0d79e2084");
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
};

ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=toyama", function (reponse){
	let infos = JSON.parse(reponse);	
	for (let i=0; i < infos.length; i++){
		console.log(infos[i]);
	let station = new Station(infos[i].address,infos[i].status,infos[i].totalStands.capacity,infos[i].totalStands.availabilities.bikes);
	console.log(station.decrire());
		let position = new Positions(infos[i].position.latitude, infos[i].position.longitude);
		console.log(position.afficher())
	}
	
});

class Station {
	constructor (address, status, capacity, disponibles){
		this.address = address;
		this.status = status;
		this.capacity = capacity;
		this.availabilities = availabilities;
	}
	
	decrire(){
		return `Adresse : ${this.address} Etat : ${this.status} Places : ${this.capacity} Vélos Disponibles : ${this.availabilities}`
	}
}

class Positions {
	constructor(latitude, longitude){
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	afficher(){
		return L.marker([this.latitude, this.longitude]).addTo(mymap);
	}
}
