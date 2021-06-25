import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import img from '../../media/images/avatar.png';

import styles from './Avatar.module.css';

type AvatarProps = HTMLAttributes<HTMLDivElement>;

export const Avatar = (props: AvatarProps) => {
	const { className, ...rest } = props;

	return (
		<div className={ classNames(styles.container, className) } { ...rest }>
			<Image
				alt="Ivo Lima Silva"
				src={ img }
				layout="fixed"
				width={ 70 }
				height={ img.height * 70 / img.width }
				className={ styles.picture } />
			<div className={ styles.infoContainer }>
				<h1 className={ styles.name }>Ivo Lima Silva</h1>
				<h2 className={ styles.title }>Software Developer</h2>
			</div>
		</div>
	);
};

export default Avatar;
