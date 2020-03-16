import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../../../../components';

import data from './Education.data.js';

export const Education = ({ className }) => (
    <Block
        title="Education"
        data={ data }
        className={ className } />
);

Education.propTypes = {
    className: PropTypes.string,
};

export default Education;
