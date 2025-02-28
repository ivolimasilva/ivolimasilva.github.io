import { formatDates } from '../../utils';

import styles from './Duration.module.css';

interface DurationProps {
  start: Date;
  end: Date;
}

export const Duration = ({ start, end }: DurationProps) => (
	<p className={ styles.dates }>{ formatDates(start, end) }</p>
);

export default Duration;
