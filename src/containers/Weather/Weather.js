import React, { Component } from 'react';

/* Components */
import MainInformation from '../../components/MainInformation/MainInformation';
import AdditInformation from '../../components/AdditInformation/AdditInformation';
import NextDays from '../../components/NextDays/NextDays';

/* Styles */
import './Weather.scss';

class Weather extends Component {
    state = {}

    render() {
        
        const {weather, listDays, nameCity} = this.props;

        return (
            <div className='box-weather'>
                <div>
                    <MainInformation />
                    <AdditInformation />
                </div>
                <NextDays
                    weather={weather}
                    listDays={listDays}
                    nameCity={nameCity}
                />
            </div>
        );
    };
};

export default Weather;