import React from 'react';
import AppView from '../Components/AppView';
import { FormattedMessage } from 'react-intl';

export default class HomeScreen extends React.Component {
    render () {
        return (
            <AppView>
                <FormattedMessage id='GREETING'/>
            </AppView>
        );
    }
};