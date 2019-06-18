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
	}
});

class Station {
	constructor (adresse, etat, places, disponibles){
		this.adresse = adresse;
		this.etat = etat;
		this.places = places;
		this.disponibles = disponibles;
	}
	
	decrire(){
		return `Adresse : ${this.adresse} Etat : ${this.etat} Places : ${this.places} Vélos Disponibles : ${this.disponibles}`
	}
}


