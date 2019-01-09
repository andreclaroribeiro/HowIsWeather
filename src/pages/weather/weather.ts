import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../../models/city';
import { CityWeather } from '../../models/cityWeather'

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
    city: any;
    temperature: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        public http: HttpClient) {
        this.city = navParams.get('city') || new City('cidade', 'pais');
        this.temperature = navParams.get('temperature') || new CityWeather(0,0,0,0,0);
    }
}
