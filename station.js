class Station {
	constructor (address, status, capacity, availabilities){
		this.address = address;
		this.status = status;
		this.capacity = capacity;
		this.availabilities = availabilities;
	}
	
	decrire(){
		return `Adresse : ${this.address} Etat : ${this.status} Places : ${this.capacity} Vélos Disponibles : ${this.availabilities}`
	}
}