import React from 'react';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class FormOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        
        this.handleChangeStart = date => {
            this.setState({
                startDate: date,
            });
        };

        this.handleChangeEnd = date => {
            this.setState({
                endDate: date,
            });
        };
    }
    
    render() {
        return(
            <form className="order__form">
                <div className="order__input-container">
                    <object className="order__calendar" type="image/svg+xml" data="/obj/calendar.svg"></object>
                    <span className="order__input-label">Заезд</span>
                    <DatePicker selected={this.state.startDate}
                                onChange={this.handleChangeStart}
                                dateFormat="dd.MM.yyyy"
                                className="order__date-input" />
                </div>
                <div className="order__input-container">
                    <object className="order__calendar" type="image/svg+xml" data="/obj/calendar.svg"></object>
                    <span className="order__input-label">Выезд</span>
                    <DatePicker selected={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                dateFormat="dd.MM.yyyy"
                                className="order__date-input" />
                </div>
                <div className="order__input-container order__input-container_guests">
                    <object className="order__user" type="image/svg+xml" data="/obj/user.svg"></object>
                    <span className="order__input-label order__input-label_guests">Гости</span>
                    <input className="order__guests-input"
                           type="text" value="1"/>
                </div>
                <button className="order__submit">Найти номер</button>
            </form>
        )
    }
}

export default FormOrder;