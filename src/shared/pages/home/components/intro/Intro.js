import React, { Fragment } from 'react';

import { Tag } from '../../../../components';

import styles from './Intro.module.css';

export const Intro = () => (
    <Fragment>
        <Tag className={ styles.tag }>Currently looking</Tag>
        <blockquote className={ styles.text }>
            <p>Full-Stack Developer based in Porto, Portugal.</p>
            <p>Former Technical Lead Developer at <a href="https://moxy.studio/" target="_blank" rel="noreferrer noopener nofollow" className={ styles.link }>MOXY.studio</a>.</p>
            <p>Lifelong learner pursuing a career in Product Development.</p>
            <p>Interested in 3D, Photography, UI/UX and Programming.</p>
        </blockquote>
    </Fragment>
);

export default Intro;
