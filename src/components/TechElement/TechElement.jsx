import React from 'react';
import './TechElement.scss';

const TechElement = ({title, classes}) => {
    return (
        <li className={classes}>
            {title}
        </li>
    );
};

export default TechElement;
