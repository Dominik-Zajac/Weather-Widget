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

        const { weather, listDays, nameCity, listCities, selectCity, toggleSelectCity, changeSelectCity } = this.props;

        return (
            <div className='box-weather'>
                <div className='box-information'>
                    <MainInformation
                        weather={weather}
                        nameCity={nameCity}
                        listDays={listDays}
                        listCities={listCities}
                        toggleSelectCity={toggleSelectCity}
                        selectCity={selectCity}
                        changeSelectCity={changeSelectCity}
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