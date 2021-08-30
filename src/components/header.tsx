import React from 'react';

interface IHeaderProps {
    settingsButtonVisible: boolean
}

const Header:React.FC<IHeaderProps> = (settingsButtonVisible) => {
    return(
        <header>    
            <div className={'headerLeft'}>settings</div>        
            <div className={'headerCenter'}><h1>Another Snake In The World</h1></div>                                
        </header>        
    )
}

export default Header;