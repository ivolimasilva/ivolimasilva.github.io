const NUMBER_OF_MS_IN_A_DAY = 1000 * 3600 * 24;
const NUMBER_OF_DAYS_IN_A_MONTH = 30;

const formatDates = (start, end) => {
	const startString = start.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	const endString = end ? end.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'current';

	end = end || new Date();

	const diff = Math.round((end.getTime() - start.getTime()) / NUMBER_OF_MS_IN_A_DAY / NUMBER_OF_DAYS_IN_A_MONTH);
	const years = Math.floor(diff / 12);
	const months = diff % 12;

	let duration = '';

	if (years > 0) {
		duration += `${years} years`;

		if (months > 0) {
			duration += ', ';
		}
	}

	if (months > 0) {
		duration += `${months} months`;
	}

	return `${startString} - ${endString} (${duration})`;
};

export default formatDates;
