import React, { useCallback } from 'react';

import RocketIcon from '../rocket-icon';

import styles from './Footer.module.css';

export const Footer = () => {
    const handleClick = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <footer className={ styles.container }>
            <p>Thanks for visiting</p>
            <RocketIcon onClick={ handleClick } className={ styles.rocket } />
        </footer>
    );
};

export default Footer;
