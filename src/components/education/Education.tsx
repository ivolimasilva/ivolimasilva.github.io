import { ComponentProps } from 'react';
import Block from '../block';

import data from './Education.data';

type EducationProps = Omit<ComponentProps<typeof Block>, 'title' | 'data'>

export const Education = (props: EducationProps) => (
	<Block
		title="Education"
		data={ data }
		{ ...props } />
);

export default Education;
