import React from 'react';

const MainTitle = () => {
    return(
        <div className="title">
            <div className="title__hotel">Отель-заповедник</div>
            <div className="title__forest">
                <object className="title__uppercase" type="image/svg+xml" data="/obj/title_part_1.svg"></object>
                <object className="title__downcase" type="image/svg+xml" data="/obj/title_part_2.svg"></object>
            </div>
            <div className="title__offer">Премиальный отдых в подмосковье</div>
        </div>
    );
};

export default MainTitle;