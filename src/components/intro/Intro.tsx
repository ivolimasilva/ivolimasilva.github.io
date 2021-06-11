import styles from './Intro.module.css';

export const Intro = () => (
	<blockquote className={ styles.text }>
		<p>Frontend Developer at <a href="https://rows.com/" target="_blank" rel="noreferrer noopener nofollow" className={ styles.link }>Rows</a>.</p>
		<p>Lifelong learner pursuing a career in Product Development.</p>
		<p>Interested in 3D, Photography, UI/UX and Programming.</p>
	</blockquote>
);

export default Intro;
