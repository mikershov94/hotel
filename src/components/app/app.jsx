import React from 'react';
import "../../main.sass";

import Image from '../image';
import Header from '../header';
import MainTitle from '../main-title';
import Price from '../price';
import Order from '../order';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            dropdownOpened: false,
        };

        this.dropdownOpen = (e) => {
            this.setState({ dropdownOpened: true })
        };

        this.dropdownClose = (e) => {
            this.setState({ dropdownOpened: false })
        };

        this.findRooms = (data) => {
            console.log(data)
            const startDate = String(data.startDate.getDate()) + '.' + String(data.startDate.getMonth() + 1) + '.' + String(data.startDate.getFullYear())
            const endDate = String(data.endDate.getDate()) + '.' + String(data.endDate.getMonth() + 1) + '.' + String(data.endDate.getFullYear())

            //заглушка
            //функция должна отбравлять данные на сервер
            alert('Поиск номеров для проживания ' + data.guests + ' гостей ' + 'в период с ' + startDate + ' по ' + endDate);
        };
    }
    
    render() {
        return(
            <div>
                <Image />
                <div className="col-right">
                    <Header dropdownOpen={this.dropdownOpen}
                            dropdownClose={this.dropdownClose}
                            dropdownOpened={this.state.dropdownOpened} />
                    <MainTitle />
                    <Price />
                </div>
                <Order findRooms={this.findRooms} />
            </div>
        )
    }
}

export default App;