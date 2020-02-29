import React from 'react';

import NavItem from '../nav-item';
import PhoneButon from '../phone-button';

const Header = () => {
    return(
        <div className="nav">
            <div className="nav__menu">
                <NavItem title="Об отеле" />
                <NavItem title="Номера и цены" />
                <NavItem title="Мероприятия" />
                <NavItem title="Контакты" />
            </div>
            <PhoneButon number="+7 (495) 005-61-59" />
        </div>
    )
};

export default Header;