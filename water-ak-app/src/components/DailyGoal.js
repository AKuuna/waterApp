import React from 'react';
import droplet from './../svg/droplet.svg';

export function DailyGoal () {
    return <div className='Goal1'>
        <img src={droplet} className="Droplet-logo" alt="logo" />
        <div className='Daily-goal Goal-text'>Daily Goal: </div>
        <div className='Ml Goal-text'>3000ml </div>
        <div className='Set-goal Goal-text'> Goal </div>
    </div>
}
