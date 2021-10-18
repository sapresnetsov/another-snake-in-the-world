import React from 'react';
// import styles from './scores_field.module.scss';

const ScoresField:React.FunctionComponent = () => {    
    return (
        <section className="scores_container">              
            <div className='current_scores'>
                <span>Your scores</span>
                <span>1000</span>            
            </div>
            <div className='best_scores'>                
                <span>Best scores</span>
                <span>1000</span>   
            </div>
        </section>
    )
}

export default ScoresField;