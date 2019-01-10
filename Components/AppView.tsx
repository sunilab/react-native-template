/**
 * Base View for all screens. Adds base styling and injects localization.
 */
import * as React from 'react';
import styled from 'styled-components/native';
import { IntlProvider, addLocaleData } from 'react-intl';
import messages_en from './../locales/en.json';
import messages_it from './../locales/it.json';
import messages_de from './../locales/de.json';
import messages_es from './../locales/es.json';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import { AsyncStorage, Text } from 'react-native';

addLocaleData([...en, ...it, ...de, ...es]);

const messages: any = {
    'en': messages_en,
    'it': messages_it,
    'de': messages_de,
    'es': messages_es
};

const StyledApp = styled.View`
    flex: 1;
    background-color: #3D2020;
    align-items: center;
    justify-content: center;
`;

export default class AppView extends React.Component<{}, any> {
    constructor (props: any) {
        super(props);
        this.state = {
            locale: 'en' // default
        };
        this._bootstrapAsync();
    }

    render () {
        let locale = this.state.locale;
        return (
            <IntlProvider locale={locale} messages={messages[locale]} textComponent={Text}>
                <StyledApp>
                    {this.props.children}
                </StyledApp>
            </IntlProvider>
        );
    }

    // get the locale from the async storage
    _bootstrapAsync = async () => {
        let locale = await AsyncStorage.getItem('locale') || 'en';
        this.setState(() => {
            return {
                locale: locale
            };
        });
    };
}