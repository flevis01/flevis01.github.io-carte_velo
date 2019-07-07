class Position {
	constructor(latitude, longitude){
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	afficher(){
		return L.marker([this.latitude, this.longitude]).addTo(mymap);
	}
}