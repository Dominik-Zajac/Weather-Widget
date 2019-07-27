import React from 'react';

/* Components */
import ShowDays from './ShowDays/ShowDays';
import ShowWeather from './ShowWeather/ShowWeather';

/* Styles */
import './NextDays.scss';

const NextDays = ({ weather, listDays, nameCity }) => {
    return (
        <div className='days-container'>
            <div className='title-box'>
                <span className='title'>{nameCity}</span>
            </div>
            <ShowDays
                weather={weather}
                listDays={listDays}
            />
            <ShowWeather
                weather={weather}
            />
        </div>
    );
};

export default NextDays;