import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/* Styles */
import './MainInformation.scss';

const MainInformation = ({ weather, nameCity }) => {
    return (
        <div className='main-container'>
            <div className='header'>
                <span className='title'>Main</span>
                <div>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faSearch}
                    />
                </div>
            </div>
            <div className='main-info'>
                <h2 className='name-city'>{nameCity}</h2>
                <p className='date'>FRI, 2019-07-26</p>
                <div className='main-info_box'>
                    <img
                        src={require(`../../images/${weather[0].type}.png`)}
                        alt={weather[0].type} />
                    <p className='main-text'>{weather[0].temperature}<span>°C</span></p>
                </div>
            </div>
        </div>
    );
}

export default MainInformation;