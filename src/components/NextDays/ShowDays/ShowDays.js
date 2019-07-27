import React from 'react';

/* Styles */
import './ShowDays.scss';

const ShowDays = ({ listDays }) => {

    // Creating next days
    const showDays = listDays.map((day, index) => {
        if (index === 0) {
            return <div className='one-day' key={day}>
                <h2 className='one-day_title'>Today</h2>
            </div>
        } else {
            return <div className='one-day' key={day}>
                <h2 className='one-day_title'>{day.slice(0, 3)}</h2>
            </div>
        }
    });

    return (
        <div className='days-row'>
            {showDays}
        </div>
    );
};

export default ShowDays;