import React, { useState, Dispatch, SetStateAction } from "react";
import classnames from 'classnames';
import { ReactComponent as SettingsSvg } from '../../../assets/svgs/settings.svg';
import styles from './settings.module.scss';

type TSettingsProps = {
    isOpen: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>;
}

type TSettings = {
    key: string;
    name: string,
    type: string,
    text: string
}

const Settings:React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleOnClick = () => setDrawerOpen(!drawerOpen);

    const settings: Array<TSettings> = [
        {                        
            key: 'borders',
            name: 'borders',
            type: 'checkbox',
            text: 'Borders'
        },
        {            
            key: 'grid',
            name: 'grid',
            type: 'checkbox',
            text: 'Grid'
        },
        {            
            key: 'sound',
            name: 'sound',
            type: 'checkbox',
            text: 'Sound'
        },
    ];

    const SettingsButton: React.FC<{className: string}> = ({className}) => {
        return  <div className={className}>
                    <button onClick={handleOnClick}>
                        <SettingsSvg />
                    </button>
                </div>
    }

    const CheckBox: React.FC<TSettings> = ({type, text}) => {
        return  <label className={styles.form_label}>                    
                    <div className={styles.checkbox_container}>
                        <input type={type} className={styles.hidden_checkbox} /> 
                        <div className={styles.custom_checkbox} />                                                   
                    </div>
                    <span>{text}</span>
                </label>                    
    }
    
    return (    
        <>
            <SettingsButton className={styles.main_button}/>
            {drawerOpen && <div className={styles.overlay} onClick={handleOnClick} />}

            <div className={classnames(styles.drawer, !drawerOpen && styles.drawer_closed)}>                
                <div className={styles.drawer_header}>                    
                    <h2>Another Snake In The World</h2>
                    <SettingsButton className={styles.drawer_button}/>  
                </div>
                <div className={styles.form_container}>
                    <form className={styles.form}>
                        {settings.map((setting) => 
                            <div key={setting.key} className={styles.form_row}>
                                <CheckBox {...setting} />
                            </div>)
                        }                                                     
                    </form>
                </div>                
            </div>
        </>        
    )
}

export default Settings;