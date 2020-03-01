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
                <Order />
            </div>
        )
    }
}

export default App;