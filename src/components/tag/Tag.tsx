import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Tag.module.css';

type TagProps = HTMLAttributes<HTMLSpanElement>;

export const Tag = (props: TagProps) => {
	const { children, className, ...rest } = props;

	return (
		<span className={ classNames(styles.container, className) } { ...rest }>
			{ children }
		</span>
	);
};

export default Tag;
