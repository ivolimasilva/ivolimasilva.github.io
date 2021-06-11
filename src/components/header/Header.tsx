import classNames from 'classnames';

import Avatar from '../avatar';
import ThemeSwapper from '../theme-swapper';

import { convertToKey } from '../../utils';
import data from './Header.data';

import styles from './Header.module.css';

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => (
	<header className={ classNames(styles.container, className) }>
		<Avatar />
		<nav className={ styles.navigation }>
			{ data.map(({ name, url }, index) => (
				<a
					key={ convertToKey(name, index) }
					href={ url }
					target="_blank"
					rel="noreferrer noopener nofollow"
					className={ styles.link }>
					{ name }
				</a>
			)) }
			<ThemeSwapper />
		</nav>
	</header>
);

export default Header;
