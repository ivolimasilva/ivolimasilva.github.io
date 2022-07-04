import RocketIcon from '../rocket-icon';

import styles from './Footer.module.css';

export const Footer = () => (
	<footer className={ styles.container }>
		<p>Thanks for visiting</p>
		<RocketIcon className={ styles.rocket } />
	</footer>
);

export default Footer;
