import React, { Component } from 'react';

/* Components */
import Weather from '../Weather/Weather';
import WidgetSwitch from '../../components/WidgetSwitch/WidgetSwitch';

/* Styles */
import './App.scss';

class App extends Component {
    todayDate = new Date().toISOString().slice(0, 10);

    state = {
        toggleWidget: false,
        actualDate: this.todayDate,
        actualCity: 1,
        isLoading: true,
        error: null,
    }

    componentDidMount() {
        fetch(`http://dev-weather-api.azurewebsites.net/api/city/${this.state.actualCity}/weather?date=${this.state.actualDate}`)
            .then(res => {
                if (res.ok) {
                    return res;
                }
                throw Error('Not work');
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                })
            })
            .catch(error => {
                this.setState(prevState => ({
                    error,
                }))
            })
            console.log(this.state.actualDate)

    };

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
