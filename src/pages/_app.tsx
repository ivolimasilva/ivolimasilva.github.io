import { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';

import { Header, Footer } from '../components';
import Favicon from '../media/favicons/favicon.ico';
import IconApple from '../media/favicons/apple-touch-icon.png';
import IconSafariPinned from '../media/favicons/safari-pinned-tab.svg';
import Icon16 from '../media/favicons/favicon-16x16.png';
import Icon32 from '../media/favicons/favicon-32x32.png';

import '../styles/global/index.css';

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Ivo Lima Silva • Frontend Developer <span aria-hidden>💻</span></title>
				<link rel="icon" href={ Favicon.src } type="image/x-icon" />
				<link rel="apple-touch-icon" href={ IconApple.src } sizes="180x180" />
				<link rel="icon" type="image/png" href={ Icon16.src } sizes="16x16" />
				<link rel="icon" type="image/png" href={ Icon32.src } sizes="32x32" />
				<link rel="mask-icon" href={ IconSafariPinned.src } />
			</Head>
			<Header />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
};

export default App;
