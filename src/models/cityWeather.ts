export class CityWeather{
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;

    constructor(public tempParam: number, public pressureParam: number, 
        public humidityParam: number, public temp_minParam: number, public temp_maxParam: number){
        this.temp = tempParam;
        this.pressure = pressureParam;
        this.humidity = humidityParam;
        this.temp_min = temp_minParam;
        this.temp_max = temp_maxParam;
    }
  }