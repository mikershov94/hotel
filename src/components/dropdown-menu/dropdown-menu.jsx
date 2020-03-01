import React from 'react';

const DropdownMenu = ({ opened }) => {
    const dropdownClass = opened ? 'dropdown' : 'dropdown dropdown_closed';

    return(
        <div className={dropdownClass}>
            <div className="dropdown__item_actions">Акции</div>
            <div className="dropdown__item">Услуги</div>
            <div className="dropdown__item">Конференц-залы</div>
            <div className="dropdown__item">Ресторан</div>
        </div>
    );
};

export default DropdownMenu;