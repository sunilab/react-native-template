import React from 'react';
import { Text, TextInput, Button } from 'react-native';
import AppView from './../Components/AppView';
import { connect } from 'react-redux';
import { getWeather } from './../store/Actions';
import styled from 'styled-components';

const TextInputStyled = styled.TextInput`
    width: 100;
    color: #FFFFFF;
`;

const TextStyled = styled.Text`
    color: #CCCCCC;
`;

class WeatherScreen extends React.Component {
    constructor (props: any) {
        super(props);
        this.state = {
            zip: null
        }
        this.displayWeather = this.displayWeather.bind(this);
        this.requestWeather = this.requestWeather.bind(this);
    }
    render () {
        return (
            <AppView>
                <TextStyled>Weather by Zip</TextStyled>
                <TextInputStyled clearButtonMode='while-editing'
                            onChangeText={text => this.setState({zip: text})}
                            autoCapitalize='none' blurOnSubmit={true}
                            enablesReturnKeyAutomatically={true}
                            placeholder='Zip' keyboardType='number-pad'/>
                {this.displayWeather()}
                <Button title='Get Weather' onPress={this.requestWeather}/>
            </AppView>
        );
    }

    displayWeather () {
        if (this.props.weather.weatherDescription) {
            return (
                <TextStyled>{`Weather is ${this.props.weather.weatherDescription}`}</TextStyled>
            )
        } else {
            return <TextStyled>No weather found</TextStyled>;
        }
    }

    requestWeather () {
        this.props.dispatch(getWeather(this.state.zip));
    }
};

const mapStateToProps = function (state: any) {
    let { weather } = state;
    return {
        weather: weather
    };
};

export default connect(mapStateToProps)(WeatherScreen);