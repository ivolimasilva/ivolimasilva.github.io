import { Fragment } from 'react';

import Tag from '../tag';
import Duration from '../duration';

import { convertToKey } from '../../utils';

import styles from './Block.module.css';

interface BlockProps {
	title: string;
	data: ExperienceEntry[];
	className?: string;
}

export const Block = ({ title, data, className }: BlockProps) => (
	<div className={ className }>
		<h3>{ title }</h3>
		{ data.map(({ organization, url, location, entries }, index) => (
			<section key={ convertToKey(organization, index) } className={ styles.entry }>
				<div className={ styles.heading }>
					<a href={ url } target="_blank" rel="noreferrer noopener nofollow" className={ styles.organizationLink }>
						<h4 className={ styles.organization }>{ organization }</h4>
					</a>
					<Tag className={ styles.tag }>{ location }</Tag>
				</div>
				{ entries.map(({ title, description, stack, startDate, endDate }, index) => (
					<Fragment key={ convertToKey(title, index) }>
						<h5 className={ styles.title }>{ title }</h5>
						<div className={ styles.description }>
							{ description.map((item, index) => (
								<p key={ convertToKey(item, index) } className={ styles.phrase }>{ item }</p>
							)) }
							{ stack &&
								<p className={ styles.stack }>Stack: { stack.map(({ name, url }, index) => (
									<a
										key={ convertToKey(name, index) }
										href={ url }
										target="_blank"
										rel="noreferrer noopener nofollow"
										className={ styles.link }>
										{ name }
									</a>
								)) }
								</p> }
						</div>
						<Duration start={ startDate } end={ endDate } />
					</Fragment>
				)) }
			</section>
		)) }
	</div>
);

export default Block;
