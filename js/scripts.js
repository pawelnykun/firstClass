function Telefon(marka, cena, kolor, system) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.system = system;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", a system to " + this.system + ".");
}

var GalaxyS6 = new Telefon("Samsung", 2500, "czarny", "Android");
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "iOS");
var One = new Telefon("OnePlus", 1200, "biały", "CyanogenMod");

GalaxyS6.printInfo();
iPhone6S.printInfo();
One.printInfo();