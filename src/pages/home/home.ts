import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { City } from '../../models/city';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cities: City[];

  constructor(public navCtrl: NavController) {
    this.getCities();
  }

  getCities(){
    this.cities = [
      new City('Lisboa', 'Portugual'),
      new City('Porto', 'Portugual'),
      new City('Rio de Janeiro', 'Brasil'),
      new City('São Paulo', 'Brasil')
    ];
  }

  openDetail(city: City){
    this.navCtrl.push('WeatherPage', { city: city });
  }
}
