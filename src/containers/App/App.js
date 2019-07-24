import React, { Component } from 'react';

/* Components */
import Weather from '../Weather/Weather';
import WidgetSwitch from '../../components/WidgetSwitch/WidgetSwitch';

/* Styles */
import './App.scss';

class App extends Component {
    state = {
        toggleWidget: true,
    }

    handleSwitchOnOff = () => {

        this.setState({
            toggleWidget: !this.state.toggleWidget
        })
    };

    render() {
        const { toggleWidget } = this.state;
        return (
            <div className='app'>
                <h1>Weather</h1>
                <div className={`container-weather ${toggleWidget && 'open-container'}`}>
                    <Weather />
                    <WidgetSwitch
                        toggleWidget={toggleWidget}
                        handleSwitch={this.handleSwitchOnOff}
                    />
                </div>
            </div>
        );
    }
};

export default App;
