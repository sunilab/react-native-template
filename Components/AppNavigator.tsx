import * as React from 'react';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from './../Screens/HomeScreen';
import WeatherScreen from './../Screens/WeatherScreen';

const tabBarVisible = function (navigation) {
    const routes = navigation.state.routes;
    const params = routes ? routes[routes.length - 1].params : null;
    let visible  = true;
    if (params && typeof params.tabBarVisible != 'undefined') {
        visible = params.tabBarVisible !== false;
    }
    return visible;
};

const AppStack = createBottomTabNavigator({
    Home: HomeScreen,
    Weather: WeatherScreen
}, {
    navigationOptions: function ({navigation}) {
        return {
            tabBarIcon: function ({focused, tintColor}) {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                        break;
                    case 'Weather':
                        iconName = `ios-sunny${focused ? '' : '-outline'}`;
                        break;
                }
                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
            tabBarVisible: tabBarVisible(navigation)
        };
    },
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        style: {
            backgroundColor: '#3D2020',
        }
    }
});

const AppNavigator = createSwitchNavigator(
    {
        App: AppStack
    },
    {
        initialRouteName: 'App'
    }
);

export default AppNavigator;