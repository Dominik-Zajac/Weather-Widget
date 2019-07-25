import React, { Component } from 'react';
import Spinner from 'react-spinkit';

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
        listDays: [],
        actualCity: 1,
        weather: [],
        isLoading: true,
        error: null,
    }


    componentDidMount() {

        /* Creating five next days of the week */
        let fiveDays = [];
        let numbers = [];
        const today = new Date().getDay();
        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let i = 0; numbers.length <= 5; i++) {
            numbers.push((i + today) % 7);
        }

        for (let i = 0; fiveDays.length < 5; i++) {
            fiveDays.push(daysOfTheWeek[numbers[i]]);
        }

        this.setState({
            listDays: fiveDays
        });

        /* ----------------------------------------*/


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
                    weather: data
                })
            })
            .catch(error => {
                this.setState(prevState => ({
                    error,
                }))
            })

    };



    handleSwitchOnOff = () => {

        this.setState({
            toggleWidget: !this.state.toggleWidget
        })
    };

    render() {
        const { toggleWidget, isLoading, weather, listDays } = this.state;
        return (
            <div className='app'>
                <h1>Weather</h1>
                <div className={`container-weather ${toggleWidget && 'open-container'}`}>
                    {isLoading ?
                        <Spinner name='ball-spin-fade-loader' className='spinner' /> :
                        <Weather
                            weather={weather}
                            listDays={listDays}
                        />
                    }
                    <WidgetSwitch
                        toggleWidget={toggleWidget}
                        handleSwitch={this.handleSwitchOnOff}
                    />
                </div>
            </div>
        );
    };
};

export default App;
