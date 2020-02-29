import React from 'react';

const PhoneButton = ({ number }) => {
    return(
        <div className="nav__phone">
            { number }
        </div>
    );
};

export default PhoneButton;