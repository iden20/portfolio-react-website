import React from 'react';
import Photo from '../../images/Photo.jpg';
import '../Cover/Cover.scss';

const Cover = ({burgerMenuOpened}) => {

    return (
        <div className={burgerMenuOpened ? "cover cover_menu_opened" : "cover"}>
            <img src={Photo} className="cover__image"/>
            <p className="cover__text">Привет! Меня зовут Иван Денисов 👋</p>
            <h1 className="cover__title">Я гениальный маркетолог <br/> Привлекаю огромное количество клиентов в бизнесы</h1>
        </div>
    );
};

export default Cover;
