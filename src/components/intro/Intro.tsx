import styles from './Intro.module.css';

export const Intro = () => (
	<blockquote className={ styles.text }>
		<p>
			Fullstack Developer, previously at <a href="https://motionapp.com/" target="_blank" rel="noreferrer noopener nofollow" className={ styles.link }>Motion</a>.
		</p>
		<p>Lifelong learner pursuing a career in Product Development.</p>
		<p>Interested in Programming, UI/UX, 3D and <a href="https://500px.com/ivolimasilva" target="_blank" rel="noreferrer noopener nofollow" className={ styles.link }>Photography</a>.</p>
	</blockquote>
);

export default Intro;
