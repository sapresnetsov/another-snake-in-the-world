import React from 'react';
import Header from './header/header';
import GameField from './game_field/game_field';
import Control from './control/control';
import ScoresField from './scores_field/scores_field';

const Main:React.FunctionComponent = () => {    
    return (
        <div className='layout'>              
            <Header />           
            <main>                                                            
                <GameField />
                <section className='control_container'>
                    <ScoresField />  
                    <Control />
                </section>
            </main>
        </div>
    )
}

export default Main;