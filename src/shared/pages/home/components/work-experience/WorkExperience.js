import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../../../../components';

import data from './WorkExperience.data.js';

export const WorkExperience = ({ className }) => (
    <Block
        title="Work Experience"
        data={ data }
        className={ className } />
);

WorkExperience.propTypes = {
    className: PropTypes.string,
};

export default WorkExperience;
