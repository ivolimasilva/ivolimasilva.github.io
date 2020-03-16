import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import img from '../../media/images/avatar.png';
import { randomColor } from '../../utils';

import styles from './Avatar.module.css';

export const Avatar = ({ className }) => {
    const haloRef = useRef();
    const pictureRef = useRef();

    useLayoutEffect(() => {
        haloRef.current.style.backgroundColor = randomColor();
        pictureRef.current.style.opacity = 1;
    }, []);

    return (
        <div className={ classNames(styles.container, className) }>
            <div className={ styles.pictureContainer }>
                <div ref={ haloRef } className={ styles.halo } />
                <img ref={ pictureRef } src={ img } className={ styles.picture } />
            </div>
            <div className={ styles.infoContainer }>
                <h1 className={ styles.name }>Ivo Lima Silva</h1>
                <h2 className={ styles.title }>Software Developer</h2>
            </div>
        </div>
    );
};

Avatar.propTypes = {
    className: PropTypes.string,
};

export default Avatar;
