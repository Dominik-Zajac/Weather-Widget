import React, { Component } from 'react';

/* Components */
import MainInformation from '../../components/MainInformation/MainInformation';
import AdditInformation from '../../components/AdditInformation/AdditInformation';
import WindInformation from '../../components/WindInformation/WindInformation';
import NextDays from '../../components/NextDays/NextDays';

/* Styles */
import './Weather.scss';

class Weather extends Component {
    state = {}

    render() {

        // Destructuring
        const { weather, listDays, nameCity } = this.props;

        return (
            <div className='box-weather'>
                <div className='box-information'>
                    <MainInformation
                        {...this.props}
                    />
                    <AdditInformation
                        weather={weather}
                    />
                    <WindInformation
                        weather={weather}
                    />
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