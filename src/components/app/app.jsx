import React from 'react';
import "../../main.sass";

import Image from '../image';
import Header from '../header';

class App extends React.Component {
    
    render() {
        return(
            <div>
                <Image />
                <div className="col-right">
                    <Header />
                </div>
            </div>
        )
    }
}

export default App;