import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Andrzej Nowak", description: "Biuro obsługi klienta", email: "a.nowak@hj.pl", onnlineh:"10:00-21:00"},
    {id: 2, name: "Kacper Kowalski", description: "Serwis komputerowy", email: "k.kowalski@hj.pl", onnlineh:"10:00-21:00"},
    {id: 3, name: "Michał Starak", description: "Doradca klienta", email: "m.starak@hj.pl", onnlineh:"10:00-21:00" },
    {id: 4, name: "Kamil Drwal", description: "Sklep stacjonarny", email: "k.drwal@hj.pl", onnlineh:"10:00-21:00" }
  ];

  PC = [
    {id: 1, name: "Bardzo słaby komputer", description: "x-kom H&O 200 i3-9100/16GB/240+1TB/W10X", price: "2500zł", image: "pc2.jpg"},
    {id: 2, name: "Słaby komputer", description: "SHIRU 7200 i5-9400F/8GB/240+1TB/W10X/GTX1050Ti", price: "3349zł", image: "pc3.jpg"},
    {id: 3, name: "Średni komputer", description: "x-kom G4M3R 500 i5-9400F/16GB/240+1TB/W10X/RTX2060", price: "4750zł", image: "pc4.jpg"},
    {id: 4, name: "Mocny komputer", description: "x-kom G4M3R 600 i7-9700K/16GB/250+1TB/RTX2070(S)", price: "9200zł", image: "pc5.jpg"},
    {id: 5, name: "Bardzo mocny komputer", description: "G4M3R 700 i9-9980XE/128GB/1TB+2TB/W10PX/2x2080Ti", price: "42000", image: "pc6.jpg"}
    
  ];

  processors = [
    {id: 1, name: "Procsor Intel ", description: "Intel Core i3", price: "300zł", image: "i3.jpg"},
    {id: 2, name: "Procsor Intel ", description: "Intel i5", price: "500zł",image: "i5.jpg"},
    {id: 3, name: "Procsor Intel ", description: "Intel i7", price: "1000zł",image: "i7.jpg"},
    {id: 4, name: "Procsor AMD", description: " AMD Athlon 3000G", price: "300zł",image: "athlon.jpg"},
    {id: 5, name: "Procsor AMD", description: "Amd Ryzen ThreadRipper", price: "900zł",image: "ryzen7.jpg"}
  ];

  graphicsCards = [
    {id: 1, name: "Nvidia RTX 2080Ti", description: "MSI GeForce RTX 2080 Ti GAMING X TRIO 11GB GDDR6", price: "6329zł",image:"2080ti.jpg"},
    {id: 2, name: "Nvidia GTX 1650", description: "Gigabyte GeForce GTX 1650 SUPER WINDFORCE OC 2X 4GB", price: "849zł",image:"1650.jpg"},
    {id: 3, name: "Nvidia RTX 2070 Super", description: "Palit GeForce RTX 2070 SUPER JetStream 8GB GDDR6", price: "2699zł",image:"2070su.jpg"},
    {id: 4, name: "Gigabyte Radeon RX 5700 ", description: "Gigabyte Radeon RX 5700 XT AORUS 8G GDDR6", price: "2500zł",image:"radeon1.jpg"},
    {id: 5, name: "PowerColor Radeon RX 5600", description: "PowerColor Radeon RX 5600 XT Red Devil 6GB GDDR6", price: "1500zł",image:"radeon2.jpg"}
  ];

  monitors = [
    {id: 1, name: "LG 24MP59G", description: "Przekątna ekranu23,8'' Powłoka matrycy: Matowa Rodzaj: matrycy: LED, IPS Typ ekranu: Płaski", price: "6329zł",image:"lg1.jpg"},
    {id: 2, name: "LG 27GL850-B NanoIPS HDR10", description: "Przeznaczenie produktu: Dla graczy Przekątna ekranu :27''Powłoka matrycy: Matowa Rodzaj matrycy: LED, Nano IPS Typ ekranu: Płaski", price: "2149zł",image:"lg2.jpg"},
    {id: 3, name: "DELL", description: "Dell SE2416H czarny", price: "469zł",image:"dell.jpg"},
    {id: 4, name: "SAMSUNG ", description: "Samsung C24F390FHUX Curved", price: "549zł",image:"sam1.jpg"},
    {id: 5, name: "SAMSUNG", description: "Samsung C27F591FDUX Curved", price: "1099zł",image:"sam2.jpg"}
  ];

  mouses = [
    {id: 1, name: "SteelSeries", description: "SteelSeries Sensei 310", price: "239zł",image:"ss1.jpg"},
    {id: 2, name: "SteelSeries", description: "SteelSeries Rival 650", price: "489zł",image:"ss2.jpg"},
    {id: 3, name: "Roccat", description: "Roccat KOVA AIMO RGB (Biała)", price: "219zł",image:"rr1.jpg"},
    {id: 4, name: "Roccat", description: "Roccat KAIN 202 AIMO", price: "409zł",image:"rr2.jpg"},
    {id: 5, name: "Logitech", description: "Logitech G703 LIGHTSPEED HERO", price: "349zł",image:"lt1.jpg"}
  ];
  accounts =[
    {fullname:"1", email:"1", numberp:"11",acctype:"11",password:"1"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email, onnlineh}>
  {
    return this.contacts;
  }

  public getProcessors():Array<{id,name,description,price,image}>
  {
    return this.processors;
  }

  public getGraphicsCards():Array<{id,name,description,price,image}>
  {
    return this.graphicsCards;
  }

  public getPC():Array<{id,name,description,price,image}>
  {
    return this.PC;
  }

  public getMonitors():Array<{id,name,description,price,image}>
  {
    return this.monitors;
  
  }

  public getMouses():Array<{id,name,description,price,image}>
  {
    return this.mouses;
  }

  public createaccount(account: {fullname, email, numberp, acctype, password})
  {
    this.accounts.push(account);
  }


}