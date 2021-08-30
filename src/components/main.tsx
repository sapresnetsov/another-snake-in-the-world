import React from 'react';
import Header from './header';

const Main:React.FunctionComponent = () => {
    return (
        <div className='wrapper' style={{backgroundImage: `url(images/background.jpg)`}}>
            
            <Header settingsButtonVisible={false}/>
            <main>
                <div className='game_field'></div>
            </main>
            
        </div>
    )
}

export default Main;