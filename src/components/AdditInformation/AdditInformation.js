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
                        src={require(`../../images/AdditInfo/precipitation.png`)}
                        alt={weather[0].windInfo.direction}
                    />
                    <p className='addit-text'>Precipitation: <span>{weather[0].precipitation}%</span></p>
                </div>
                <div className='addit-info_box'>
                    <img
                        className='addit-image'
                        src={require(`../../images/AdditInfo/humidity.png`)}
                        alt={weather[0].windInfo.direction}
                    />
                    <p className='addit-text'>Humidity: <span>{weather[0].humidity}%</span></p>
                </div>
                <div className='addit-info_box'>
                    <img
                        className='addit-image'
                        src={require(`../../images/AdditInfo/pollen-count.png`)}
                        alt={weather[0].windInfo.direction}
                    />
                    <p className='addit-text'>Pollen Count: <span>{weather[0].pollenCount}</span></p>
                </div>
            </div>
        </div>
    );
}

export default AdditInformation;