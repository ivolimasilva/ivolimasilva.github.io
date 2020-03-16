import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { randomColor } from '../../utils';

import styles from './Tag.module.css';

export const Tag = ({ children, className }) => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        containerRef.current.style.backgroundColor = randomColor();
    }, []);

    return (
        <span ref={ containerRef } className={ classNames(styles.container, className) }>
            { children }
        </span>
    );
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Tag;
