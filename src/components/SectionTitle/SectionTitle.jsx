import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({title, burgerMenuOpened}) => {
    return <h2 className="section__title"><span className="section__title-circle"/>{title}</h2>;
};

export default SectionTitle;
