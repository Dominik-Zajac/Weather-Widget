import React, { Component } from 'react';

/* Components */
import MainInformation from '../../components/MainInformation/MainInformation';
import AdditInformation from '../../components/AdditInformation/AdditInformation';
import NextDays from '../../components/NextDays/NextDays';

/* Styles */
import './Weather.scss';

class Weather extends Component {
    state = {
    }
    render() {
        console.log(this.props.listDays)
        return (
            <div className='box-weather'>
                <div>
                    <MainInformation />
                    <AdditInformation />
                </div>
                <NextDays
                    weather={this.props.weather}
                    listDays={this.props.listDays}
                    />
            </div>
        );
    };
};

export default Weather;