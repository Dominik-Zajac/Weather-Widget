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
        // toggleWidget: false,
        toggleWidget: true,
        toggleSelectCity: false,
        actualDate: this.todayDate,
        listDays: [],
        actualCity: 1,
        nameCity: 'Katowice',
        listCities: [],
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


        Promise.all([
            fetch(`http://dev-weather-api.azurewebsites.net/api/city/${this.state.actualCity}/weather?date=${this.state.actualDate}`),
            fetch(`http://dev-weather-api.azurewebsites.net/api/city/`)
        ])
            // .then(([res1, res2]) => {
            //     if (res1.ok && res2.ok) {
            //         return res1;
            //     }
            //     throw Error('Not work');
            // })
            .then(([resFirst, resSecond]) => Promise.all([resFirst.json(), resSecond.json()]))
            .then(([dataFirst, dataSecond]) => {

                this.setState({
                    isLoading: false,
                    weather: dataFirst,
                    listCities: dataSecond
                })
            })
            .catch(error => {
                this.setState(prevState => ({
                    error,
                }))
            })
    };

    handleSelectCity = (id) => {
        const nameCity = this.state.listCities[id - 1].name;

        this.setState({
            actualCity: id,
            nameCity,
            toggleSelectCity: !this.state.toggleSelectCity
        });
    };
    handleChangeCity = () => {
        this.setState({
            toggleSelectCity: !this.state.toggleSelectCity
        })
    }

    handleSwitchOnOff = () => {

        this.setState({
            toggleWidget: !this.state.toggleWidget
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.actualCity !== this.state.actualCity) {
            this.componentDidMount();
        }
    }

    render() {
        const { toggleWidget, isLoading, weather, listDays, nameCity, listCities, toggleSelectCity } = this.state;
        return (
            <div className='app'>
                <h1>Weather</h1>
                <div className={`container-weather ${toggleWidget && 'open-container'}`}>
                    {isLoading ?
                        <Spinner name='ball-spin-fade-loader' className='spinner' /> :
                        <Weather
                            weather={weather}
                            listDays={listDays}
                            nameCity={nameCity}
                            listCities={listCities}
                            toggleSelectCity={toggleSelectCity}
                            selectCity={this.handleSelectCity}
                            changeSelectCity={this.handleChangeCity}
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
