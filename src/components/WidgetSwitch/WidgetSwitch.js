import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

/* Styles */
import './WidgetSwitch.scss';

const WidgetSwitch = ({ toggleWidget, handleSwitch }) => {
    return (
        <div className='box-switch'>
            <FontAwesomeIcon
                className='icon'
                icon={toggleWidget ? faArrowLeft : faArrowRight}
                onClick={handleSwitch}
            />
            <FontAwesomeIcon
                className='icon'
                icon={faSun}
            />
            <FontAwesomeIcon
                className='icon'
                icon={faCloud}
            />
        </div>
    );
};

export default WidgetSwitch;