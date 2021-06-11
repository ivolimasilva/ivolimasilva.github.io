import PropTypes from 'prop-types';

import Block from '../block';

import data from './WorkExperience.data';

interface WorkExperienceProps {
	className?: string;
}

export const WorkExperience = ({ className }: WorkExperienceProps) =>
	<Block title="Work Experience" data={ data } className={ className } />;

WorkExperience.propTypes = {
	className: PropTypes.string,
};

export default WorkExperience;
