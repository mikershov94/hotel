import React from 'react';
import "../../main.sass";

class App extends React.Component {
    
    render() {
        return(
            <div>
                <Header />
                <Image />
                <MainTitle />
                <Price />
                <Order />
            </div>
        )
    }
}

export default App;