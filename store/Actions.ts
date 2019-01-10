export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_RESPONSE = 'GET_WEATHER_RESPONSE';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
const OPEN_WEATHER_MAP_API_KEY = '42651f68dbe7472f99ac2d3c8a3bab84';

function getWeatherRequest (zip: number): any {
    return {
        type: GET_WEATHER_REQUEST,
        zip: zip
    }
}

function getWeatherResponse (weather: any): any {
    return {
        type: GET_WEATHER_RESPONSE,
        weather: weather,
        receivedAt: Date.now()
    }
}

function getWeatherError (error: any): any {
    return {
        type: GET_WEATHER_ERROR,
        error: error,
        receivedAt: Date.now()
    }
}

export function getWeather (zip: number): any {
    return function (dispatch: Function) {
        dispatch(getWeatherRequest(zip));

        const weatherAPI: string = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${OPEN_WEATHER_MAP_API_KEY}`;
    
        return fetch(
            weatherAPI
        )
        .then(response => response.json())
        .then(function(json) {
            dispatch(getWeatherResponse(json))
        })
        .catch(error => dispatch(getWeatherError(error)))
    }
};