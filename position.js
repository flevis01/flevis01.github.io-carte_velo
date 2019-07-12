class Position {
	constructor(latitude, longitude){
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	afficher(){
		let marker = L.marker([this.latitude, this.longitude]).addTo(mymap);
		let markerElt = new Map();
		marker.addEventListener("click", markerElt.onClick());
		return marker;
	}
}