import React from 'react';

import styles from './styles.module.scss';

import logo from './logo.svg';

const Logo = ({ label }) => {
    return (
        <h1 className={ styles.logoContainer }>
            <img src={ logo }
                alt='Logo'
                className={ styles.logo }
            />

            <span className={ styles.title }>
                { label }
            </span>
        </h1>
    );
};

export default Logo;
