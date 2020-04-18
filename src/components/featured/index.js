import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carrousel />

            <div className="bigTitle">
                <div className="bigInside">
                    Delicious
                </div>
            </div>
            <Countdown/>

        </div>
    );
};

export default Featured;