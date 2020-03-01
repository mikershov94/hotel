import React from 'react';

import NavItem from '../nav-item';
import PhoneButon from '../phone-button';
import DropdownMenu from '../dropdown-menu';

const Header = ({ dropdownOpen, dropdownClose, dropdownOpened }) => {
    return(
        <div className="nav">
            <div className="nav__menu">
                <NavItem title="Об отеле" />
                <div onMouseEnter={dropdownOpen} onMouseLeave={dropdownClose}>
                    <NavItem title="Номера и цены" />
                </div>
                <DropdownMenu opened={dropdownOpened}/>
                <NavItem title="Мероприятия" />
                <NavItem title="Контакты" />
            </div>
            <PhoneButon number="+7 (495) 005-61-59" />
        </div>
    )
};

export default Header;