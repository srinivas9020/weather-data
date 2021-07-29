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
