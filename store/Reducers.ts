import { combineReducers } from 'redux';
import { GET_WEATHER_REQUEST, GET_WEATHER_RESPONSE, GET_WEATHER_ERROR } from './Actions';

/**
 * Reducer for a weather request.
 * @param state {any} The store state.
 * @param action {any} The action object.
 * Sample JSON returned by the GET_WEATHER_RESPONSE
 * {"coord":{"lon":-122.08,"lat":37.39},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":286.98,"pressure":1021,"humidity":86,"temp_min":285.15,"temp_max":288.15},"visibility":16093,"wind":{"speed":2.3,"deg":115.5},"clouds":{"all":90},"dt":1546919880,"sys":{"type":1,"id":5122,"message":0.0107,"country":"US","sunrise":1546960977,"sunset":1546996049},"id":420006353,"name":"Mountain View","cod":200}
 */
function weatherRequest (
    state = {
        networkRequestInProgress: false,
        zip: null,
        weatherDescription: null
    },
    action: any
) {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                networkRequestInProgress: true,
                zip: action.zip
            };
        case GET_WEATHER_RESPONSE:
            const weatherDescription = action.weather ? action.weather.weather[0].description : 'not found';
            return {
                ...state,
                networkRequestInProgress: false,
                zip: action.zip,
                weatherDescription: weatherDescription
            };
        case GET_WEATHER_ERROR:
            break;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    weather: weatherRequest
});

export default rootReducer;