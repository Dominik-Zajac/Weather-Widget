import React from 'react';

/* Styles */
import './ShowWeather.scss';

const ShowWeather = ({ weather }) => {

    // Creating next days with weather
    const showWeather = weather.map((day, index) =>
        <div className='weather-day' key={index}>
            <img
                src={require(`../../../images/${day.type}.png`)}
                alt={day.type}
            />
            <span className='degrees'>{day.temperature}°C</span>
        </div>
    );

    return (
        <div className='weather-row'>
            {showWeather}
        </div>
    );
};

export default ShowWeather;