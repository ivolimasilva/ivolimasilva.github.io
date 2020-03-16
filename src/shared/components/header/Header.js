import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../avatar';
import ThemeSwapper from '../theme-swapper';

import data from './Header.data.js';
import { convertToKey } from '../../utils';

import styles from './Header.module.css';

export const Header = ({ className }) => (
    <header className={ classNames(styles.container, className) }>
        <Avatar />
        <nav className={ styles.navigation }>
            { data.map(({ name, url }, index) => (
                <a
                    key={ convertToKey(name, index) }
                    href={ url }
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    className={ styles.link }>
                    { name }
                </a>
            )) }
            <ThemeSwapper />
        </nav>
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
