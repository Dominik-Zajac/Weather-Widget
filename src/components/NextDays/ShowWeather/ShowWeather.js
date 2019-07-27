import React from 'react';
import Spinner from 'react-spinkit';

/* Styles */
import './ShowWeather.scss';

const ShowWeather = ({ weather }) => {

    // Array attribution to weatherArray
    const weatherArray = weather;

    // Check if all days have been download
    if (weather.length < 5) {
        for (let i = weather.length; i < 5; i++) {
            weatherArray.push(null);
        };
    };

    // Creating next days with weather
    const showWeather = weatherArray.map((day, index) => {
        if (index === 0) {
            return <div className='weather-day display-weather_day' key={index}>
                <img
                    src={require(`../../../images/${day.type}.png`)}
                    alt={day.type}
                />
                <span className='degrees'>{day.temperature}°C</span>
            </div>
        } else {
            if (day === null) {
                return <div className='weather-day' key={index}>
                    <Spinner name='circle' className='spinner-circle' />
                </div>
            } else {
                return <div className='weather-day' key={index}>
                    <img
                        src={require(`../../../images/${day.type}.png`)}
                        alt={day.type}
                    />
                    <span className='degrees'>{day.temperature}°C</span>
                </div>
            }
        }
    });

    return (
        <div className='weather-row'>
            {showWeather}
        </div>
    );
};

export default ShowWeather;