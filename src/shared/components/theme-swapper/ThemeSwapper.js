import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import SunIcon from '../sun-icon';
import MoonIcon from '../moon-icon';

import styles from './ThemeSwapper.module.css';

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const ThemeSwapper = () => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const handleClick = useCallback(() => {
        setTheme((currentTheme) => currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <button onClick={ handleClick } className={ styles.container }>
            <SunIcon className={ classNames(styles.icon, styles.sun) } />
            <MoonIcon className={ classNames(styles.icon, styles.moon) } />
        </button>
    );
};

export default ThemeSwapper;
