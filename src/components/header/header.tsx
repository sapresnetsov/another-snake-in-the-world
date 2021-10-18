import React from 'react';
import Settings from './settings/settings';
import styles from './header.module.scss';

const Header:React.FC = () => {
    return(
        <header className={styles.header}>   
            <Settings />  
            <h1>Another Snake In The World</h1>                               
        </header>        
    )
}

export default Header;