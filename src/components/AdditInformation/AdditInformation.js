import React from 'react';

/* Styles */
import './AdditInformation.scss';

const AdditInformation = ({ weather }) => {
    return (
        <div className='addit-container'>
            <div className='title-box'>
                <span className='title'>Additional</span>
            </div>
            <div className='addit-info'>
                <div className='addit-info_box'>
                    <img
                        className='addit-image'
                        src={require(`../../images/AdditInfo/precipitation.svg`)}
                        alt={weather[0].precipitation}
                    />
                    <p className='addit-text'>Precipitation: <span>{weather[0].precipitation}%</span></p>
                </div>
                <div className='addit-info_box'>
                    <img
                        className='addit-image'
                        src={require(`../../images/AdditInfo/humidity.svg`)}
                        alt={weather[0].humidity}
                    />
                    <p className='addit-text'>Humidity: <span>{weather[0].humidity}%</span></p>
                </div>
                <div className='addit-info_box'>
                    <img
                        className='addit-image'
                        src={require(`../../images/AdditInfo/pollen-count.svg`)}
                        alt={weather[0].pollenCount}
                    />
                    <p className='addit-text'>Pollen Count: <span>{weather[0].pollenCount}</span></p>
                </div>
            </div>
        </div>
    );
};

export default AdditInformation;