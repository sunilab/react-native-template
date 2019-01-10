import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './Components/AppNavigator';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';

const AppContainer = createAppContainer(AppNavigator);
const store = ConfigureStore();

export default class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
};
