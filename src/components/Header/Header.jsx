import React from 'react';
import './Header.scss';

const Header = ({openBurgerMenu, burgerMenuOpened}) => {

    return (
        <header className={!burgerMenuOpened ? "header header_closed" : "header"}>
            <div className={!burgerMenuOpened ? "header__content header__content_closed" : "header__content"}>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list-item" onClick={() => openBurgerMenu()}>
                            <a className="header__nav-link" href="#about">Обо мне</a>
                        </li>
                        <li className="header__nav-list-item" onClick={() => openBurgerMenu()}>
                            <a className="header__nav-link" href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <button onClick={() => openBurgerMenu()} className={burgerMenuOpened ? "burger-menu__button burger-menu__button_closed" : "burger-menu__button"}></button>
        </header>
    );
};

export default Header;
