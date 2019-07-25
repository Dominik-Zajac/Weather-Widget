import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, } from '@fortawesome/free-solid-svg-icons';

/* Styles */
import './WindInformation.scss';

const WindInformation = ({ weather }) => {
    return (
        <div className='wind-container'>
            <div className='title-box'>
                <span className='title'>Wind</span>
            </div>
            <FontAwesomeIcon
                className='wind-icon'
                icon={faWind}
            />
            <div className='wind-info_box' >
                <img
                    className='wind-direction'
                    src={require(`../../images/WindDirections/${weather[0].windInfo.direction}.png`)}
                    alt={weather[0].windInfo.direction}
                />
                <span> {weather[0].windInfo.speed}m/s</span>
            </div>
        </div>
    );
};

export default WindInformation;