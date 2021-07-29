export const CURRENT_WEATHER_DATA = {
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 292.41,
        "feels_like": 292.25,
        "temp_min": 289.81,
        "temp_max": 294.65,
        "pressure": 1008,
        "humidity": 71
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.34,
        "deg": 261,
        "gust": 4.92
    },
    "clouds": {
        "all": 75
    },
    "dt": 1627469467,
    "sys": {
        "type": 2,
        "id": 2019646,
        "country": "GB",
        "sunrise": 1627445901,
        "sunset": 1627502124
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}

export const EXPECTED_WEATHER_DATA = {
    cityName: "London",
    temparature: 292.41,
    sunsetTime: 1627502124,
    sunriseTime: 1627445901,
    timezone: 3600
}

export const FORECAST_DATA = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1627527600,
        "main": {
          "temp": 285.69,
          "feels_like": 285.27,
          "temp_min": 285.69,
          "temp_max": 285.8,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1006,
          "humidity": 87,
          "temp_kf": -0.11
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.84,
          "deg": 239,
          "gust": 11.71
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2021-07-29 03:00:00"
      },
      {
        "dt": 1627538400,
        "main": {
          "temp": 285.89,
          "feels_like": 285.41,
          "temp_min": 285.89,
          "temp_max": 286.28,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1007,
          "humidity": 84,
          "temp_kf": -0.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 10
        },
        "wind": {
          "speed": 4.66,
          "deg": 243,
          "gust": 11.08
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-07-29 06:00:00"
      },
      {
        "dt": 1627549200,
        "main": {
          "temp": 288.89,
          "feels_like": 288.24,
          "temp_min": 288.89,
          "temp_max": 290.49,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1007,
          "humidity": 66,
          "temp_kf": -1.6
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 5.72,
          "deg": 254,
          "gust": 8.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-07-29 09:00:00"
      },
      {
        "dt": 1627560000,
        "main": {
          "temp": 293.88,
          "feels_like": 293.11,
          "temp_min": 293.88,
          "temp_max": 293.88,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1007,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 26
        },
        "wind": {
          "speed": 6.05,
          "deg": 251,
          "gust": 8.55
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-07-29 12:00:00"
      },
      {
        "dt": 1627570800,
        "main": {
          "temp": 295.03,
          "feels_like": 294.21,
          "temp_min": 295.03,
          "temp_max": 295.03,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1007,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 5.75,
          "deg": 264,
          "gust": 8.23
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-07-29 15:00:00"
      },
      {
        "dt": 1627635600,
        "main": {
          "temp": 289.22,
          "feels_like": 288.81,
          "temp_min": 289.22,
          "temp_max": 289.22,
          "pressure": 1001,
          "sea_level": 1001,
          "grnd_level": 998,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 51
        },
        "wind": {
          "speed": 7.18,
          "deg": 170,
          "gust": 13.78
        },
        "visibility": 10000,
        "pop": 0.24,
        "rain": {
          "3h": 0.28
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-07-30 09:00:00"
      }
    ],
    "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
        "lat": 51.5085,
        "lon": -0.1257
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 3600,
      "sunrise": 1627532389,
      "sunset": 1627588434
    }
}

export const EXPECTED_FORECAST_DATA = [
   { 
    seaLevel: 1010,
    temparature: 288.89,
    dt_txt: '2021-07-29 09:00:00'
   },
   {
    seaLevel: 1001,
    temparature: 289.22,
    dt_txt: '2021-07-30 09:00:00'   
   }
]
