import React from 'react';

import FormOrder from '../form-order';

const Order = ({ findRooms }) => {
    return(
        <div className="order">
            <object className="order__top" type="image/svg+xml" data="/obj/horizontal_top.svg"></object>
            <div className="order__content">
                <div className="order__label">Бронирование номеров</div>
                <FormOrder findRooms={findRooms} />
            </div>
            <object className="order__bottom" type="image/svg+xml" data="/obj/horizontal.svg"></object>
        </div>
    );
}

export default Order;