import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import img from '../../media/images/avatar.png';

import styles from './Avatar.module.css';

type AvatarProps = HTMLAttributes<HTMLDivElement>

export const Avatar = (props: AvatarProps) => {
	const { className, ...rest } = props;

	return (
		<div className={ classNames(styles.container, className) } { ...rest }>
			<div className={ styles.pictureContainer }>
				<div className={ styles.halo } />
				<img alt="Ivo Lima Silva" src={ img } width="77" height="77" className={ styles.picture } />
			</div>
			<div className={ styles.infoContainer }>
				<h1 className={ styles.name }>Ivo Lima Silva</h1>
				<h2 className={ styles.title }>Software Developer</h2>
			</div>
		</div>
	);
};

export default Avatar;
