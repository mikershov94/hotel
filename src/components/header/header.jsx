import React from 'react';

import NavItem from '../nav-item';

const Header = () => {
    return(
        <div className="menu">
            <NavItem title="Об отеле" />
            <NavItem title="Номера и цены" />
            <NavItem title="Мероприятия" />
            <NavItem title="Контакты" />
            
        </div>
    )
};

export default Header;