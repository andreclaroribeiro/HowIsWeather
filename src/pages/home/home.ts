import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../../models/city';
import { CityWeather } from '../../models/cityWeather';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cities: City[];
  loading: Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, 
    public http: HttpClient, public alertCtrl: AlertController) {
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
    
    this.showLoading();

    var apiKey = 'fad82300efc1bd194e1a07bc73392f5b';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`

    this.http.get(url).subscribe(res => {
        var temperature = this.convertToModel(res);
        this.navCtrl.push('WeatherPage', { city: city, temperature: temperature });
    }, err => {
        this.showError(err);
    });
  }

  public showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
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
