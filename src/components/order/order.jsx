import React from 'react';

const Order = () => {
    return(
        <div className="order">
            <object className="order__top" type="image/svg+xml" data="/obj/horizontal_top.svg"></object>
            <div className="order__content"></div>
            <object className="order__bottom" type="image/svg+xml" data="/obj/horizontal.svg"></object>
        </div>
    );
}

export default Order;