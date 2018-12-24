import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../../models/city';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
    city: any;
    position: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
        this.city = navParams.get('city') || new City('cidade', 'pais');
        this.getWeather();
    }

    getWeather()
    {
        var cityName = this.city.name;
        var apiKey = 'fad82300efc1bd194e1a07bc73392f5b';
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

        this.http.get(url, { responseType: 'text' }).subscribe(res => {
        this.position = res;
        });
    }
}
