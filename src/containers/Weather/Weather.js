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
        return (
            <div className='box-weather'>
                <div>
                    <MainInformation />
                    <AdditInformation />
                </div>

                <NextDays />
            </div>            
        );
    };
};

export default Weather;