import React, { Component } from 'react';

/* Components */
import Weather from '../Weather/Weather';
import WidgetSwitch from '../../components/WidgetSwitch/WidgetSwitch';

/* Styles */
import './App.scss';

class App extends Component {
    state = {
        toggleWidget: false,
    }

    render() {

        return (
            <div className='App'>
                <h1>Weather</h1>
                <div className='container-weather'>
                    <Weather />
                    <WidgetSwitch
                        toggleWidget={this.state.toggleWidget}
                    />
                </div>
            </div>
        );
    }
};

export default App;
