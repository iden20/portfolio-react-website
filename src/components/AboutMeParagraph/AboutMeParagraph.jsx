import React from 'react';
import './AboutMeParagraph.scss';

const AboutMeParagraph = ({title, text}) => {
    return (
        <li className="about-paragraph">
            <h4 className="about-paragraph__heading">{title}</h4>
            <p className="about-paragraph__text">{text}</p>
        </li>
    );
};

export default AboutMeParagraph;
