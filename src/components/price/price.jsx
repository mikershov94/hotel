import React from 'react';

const Price = () => {
    return(
        <div className="price">
            <object className="price__border" type="image/svg+xml" data="/obj/vertical.svg"></object>
            <div className="price__content">
                <div className="price__top">от</div>
                <div className="price__number">5 500 ₽</div>
                <div className="price__bottom">в сутки </div>
                <div className="price__description">4х разовое питание и all inclusive. Собственное подсобное хозяйство, бассейн, баня, конный двор
и контактный зоопарк.</div>
            </div>
        </div>
    );
};

export default Price;