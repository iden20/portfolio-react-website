import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import './Contacts.scss';

const Contacts = () => {
    return (
        <div id="contacts" className="contacts">
            <SectionTitle title="контакты" />
            <ul className="contacts__list">
                <li className="contacts__list-item">
                    <a target="_blank" href="https://t.me/user123" className="contacts__item-link">Telegram</a>
                </li>
                <li className="contacts__list-item">
                    <a target="_blank" href="https://wa.me/79123456789" className="contacts__item-link">WhatsApp</a>
                </li>
                <li className="contacts__list-item">
                    <a target="_blank" href="mailto:example@yandex.ru" className="contacts__item-link">Почта</a>
                </li>
                <li className="contacts__list-item">
                    <a target="_blank" href="https://github.com/user" className="contacts__item-link">Github</a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
