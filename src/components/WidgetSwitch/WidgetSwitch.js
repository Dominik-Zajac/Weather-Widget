import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const WidgetSwitch = ({ toggleWidget }) => {
    return (
        <div>
            <FontAwesomeIcon
                className='icon'
                icon={toggleWidget ? faArrowLeft : faArrowRight}
            />
        </div>
    );
};

export default WidgetSwitch;