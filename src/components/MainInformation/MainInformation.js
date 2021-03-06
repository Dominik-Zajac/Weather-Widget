import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/* Styles */
import './MainInformation.scss';

const MainInformation = (props) => {

    // Destructuring
    const { weather, nameCity, listDays, listCities, selectCity,
        toggleSelectCity, changeSelectCity } = props;

    // Date formatting
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const showMonth = months[date.getMonth()];
    const showDay = date.getDate();
    const showNameDay = listDays[0].slice(0, 3);
    const buttonsCities = listCities.map(city => (
        <div key={city.id}>

            <button onClick={() => selectCity(city.id)}>{city.name}</button>
        </div>
    ));

    return (
        <div className='main-container'>
            <div className='header'>
                <span className='title'>Main</span>
                <div>
                    <FontAwesomeIcon
                        className='icon'
                        icon={faSearch}
                        onClick={() => changeSelectCity()}
                    />
                </div>
            </div>
            {/* City selection window */}
            <div className={toggleSelectCity ? 'select-city' : 'disable'}>
                {buttonsCities}
            </div>
            {/* Container for information */}
            <div className={toggleSelectCity ? 'disable' : 'main-info'}>
                <h2 className='name-city'>{nameCity}</h2>
                <p className='date'>{showNameDay}, {showMonth} {showDay}</p>
                <div className='main-info_box'>
                    <img
                        src={require(`../../images/${weather[0].type}.png`)}
                        alt={weather[0].type} />
                    <p className='main-text'>{weather[0].temperature}<span>°C</span></p>
                </div>
            </div>
        </div>
    );
};

export default MainInformation;