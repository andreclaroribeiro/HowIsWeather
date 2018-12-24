export class City{
    name: string;
    country: string;
  
    constructor(public nameParam: string, public countryParam: string){
      this.name = nameParam;
      this.country = countryParam;
    }
  }