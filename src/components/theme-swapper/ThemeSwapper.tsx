import { useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';

import useSystemTheme from 'react-use-system-theme';

import SunIcon from '../sun-icon';
import MoonIcon from '../moon-icon';

import styles from './ThemeSwapper.module.css';

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
};

export const ThemeSwapper = () => {
	const buttonRef = useRef<HTMLButtonElement>();
	const systemTheme = useSystemTheme(THEMES.LIGHT);

	const setButtonLabel = (theme: string) => buttonRef.current.setAttribute('aria-label', `Change theme to ${theme}`);

	useEffect(() => {
		const currentTheme = !document.body.getAttribute('data-theme') ?
			systemTheme :
			document.body.getAttribute('data-theme');

		setButtonLabel(currentTheme);
	}, [systemTheme]);

	useEffect(() => {
		if (document.body.getAttribute('data-theme') === systemTheme) {
			document.body.removeAttribute('data-theme');
		}
	}, [systemTheme]);

	const handleClick = useCallback(() => {
		if (!document.body.getAttribute('data-theme')) {
			const theme = systemTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

			document.body.setAttribute('data-theme', theme);
			setButtonLabel(theme);
		} else {
			document.body.removeAttribute('data-theme');
			setButtonLabel(systemTheme);
		}
	}, [systemTheme]);

	return (
		<button ref={ buttonRef } onClick={ handleClick } className={ styles.container }>
			<SunIcon aria-hidden className={ classNames(styles.icon, styles.sun) } />
			<MoonIcon aria-hidden className={ classNames(styles.icon, styles.moon) } />
		</button>
	);
};

export default ThemeSwapper;
