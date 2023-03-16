import React from 'react';

export function Weight () {
    return <div className='Weight'>
        <p className='Weight text'> Weight </p>
        <div className='Weight-hidden' type='hidden'> 100kg </div>
        <button className='Weight-button'> Toggle Me! </button>
    </div>
}