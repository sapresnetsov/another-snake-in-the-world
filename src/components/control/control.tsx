import React, {useState} from 'react';
import {ReactComponent as PlayIcon} from '../../assets/svgs/play.svg';
import {ReactComponent as ResetIcon} from '../../assets/svgs/reset.svg';
import {ReactComponent as UpIcon} from '../../assets/svgs/up.svg';
import {ReactComponent as RightIcon} from '../../assets/svgs/right.svg';
import {ReactComponent as DownIcon} from '../../assets/svgs/down.svg';
import {ReactComponent as LeftIcon} from '../../assets/svgs/left.svg';
import styles from './control.module.scss';

const Control: React.FC = () => {
    const [animation, setAnimation] = useState(false);

    return (        
        <section className={"container"}>
            <div className={"left_container"}>
                <button name='button_play'>                    
                    <PlayIcon />
                </button>
                <button name='button_reset' onClick={() => setAnimation(true)} onAnimationEnd={() => setAnimation(false)}>                    
                    <ResetIcon className={animation ? "reset_icon" : ''} />
                </button>
            </div>
            <div className={"right_container"}>
                <div />
                <div>
                    <button name='button_move_up'> 
                        <UpIcon />
                    </button>
                </div>
                <div />
                <div>
                    <button name='button_move_left'>
                        <LeftIcon />
                    </button>
                </div>
                <div />
                <div>
                    <button name='button_move_right'>
                        <RightIcon />
                    </button>
                </div>   
                <div />
                <div>
                    <button name='button_move_down'>
                        <DownIcon />
                    </button>
                </div>
                <div />
            </div>
        </section>  
    )
}

export default Control;