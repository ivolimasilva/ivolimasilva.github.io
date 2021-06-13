import { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';

import { Header, Footer } from '../../components';

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Ivo Lima Silva • Frontend Developer <span aria-hidden>💻</span></title>
			</Head>
			<Header />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
};

export default App;
