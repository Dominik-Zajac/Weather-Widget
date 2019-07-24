import React, { Component } from 'react';
import Spinner from 'react-spinkit';

/* Styles */
import './Weather.scss';

class Weather extends Component {
    state = {
    }
    render() {
        return (
            <div className='box-weather'>
                {this.props.isLoading ? 
                <Spinner name="ball-spin-fade-loader" className='spinner'/> : 
                <h1>Weather</h1>}
            </div>            
        );
    };
};

export default Weather;