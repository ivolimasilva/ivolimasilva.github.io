import { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';

import { Header, Footer } from '../../components';

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<Fragment>
			<Header />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
};

export default App;
