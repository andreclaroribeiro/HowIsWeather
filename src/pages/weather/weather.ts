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
    temperatures: CityWeather[];

    constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
        this.city = navParams.get('city') || new City('cidade', 'pais');
        this.getWeather();
    }

    getWeather()
    {
        var cityName = this.city.name;
        var apiKey = 'fad82300efc1bd194e1a07bc73392f5b';
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

        this.http.get(url, { responseType: 'json' }).subscribe(res => {
            this.temperatures = [ this.convertToModel(res) ];
            console.log(this.convertToModel(res));
        }, err => {
            console.error('ERROR', err);
        });
    }

    convertToModel(response){
        var cityWeather = new CityWeather(
            response.main.temp,
            response.main.pressure,
            response.main.humidity,
            response.main.temp_min,
            response.main.temp_max
        );

        return cityWeather;
    }
}
