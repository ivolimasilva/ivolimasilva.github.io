import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import { Header, Footer, SEO } from '../components';

import '../styles/global/index.css';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    return (
        <Fragment>
            <SEO />
            <Header />
            <main className={ styles.main }>
                { children }
            </main>
            <Footer />
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
