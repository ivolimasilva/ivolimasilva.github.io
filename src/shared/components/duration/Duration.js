import React from 'react';
import PropTypes from 'prop-types';

import { formatDates } from '../../utils';

import styles from './Duration.module.css';

export const Duration = ({ start, end }) => (
    <p className={ styles.dates }>{ formatDates(start, end) }</p>
);

Duration.propTypes = {
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date),
};

export default Duration;
