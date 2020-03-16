import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer, SEO } from '../components';

import '../styles/global/index.css';
import styles from './Layout.module.css';

export const Layout = ({ children }) => (
    <Fragment>
        <SEO />
        <Header />
        <main className={ styles.main }>
            { children }
        </main>
        <Footer />
    </Fragment>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
