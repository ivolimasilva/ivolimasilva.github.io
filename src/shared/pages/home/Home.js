import React, { Fragment } from 'react';

import { Intro, WorkExperience, Education } from './components';

import styles from './Home.module.css';

const Home = () => (
    <Fragment>
        <Intro />
        <WorkExperience className={ styles.section } />
        <Education className={ styles.section } />
    </Fragment>
);

export default Home;
