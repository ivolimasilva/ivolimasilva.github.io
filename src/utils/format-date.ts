/**
 * Formats a date range with month abbreviations and year shorthand,
 * including the duration in years and months.
 *
 * @param {Date} from - Start date
 * @param {Date} [to = new Date()] - End date
 * @returns {string} Formatted date range with duration
 */
function formatDate(from: Date, to?: Date): string {
	// Make sure dates are valid
	if (!(from instanceof Date) || Number.isNaN(from.getTime()) || (!!to && !(to instanceof Date)) || (!!to && Number.isNaN(to.getTime()))) {
		throw new Error('Invalid date input');
	}

	const _to = to || new Date();

	// Extract month names and years
	const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const fromMonth: string = months[from.getMonth()];
	const toMonth: string = months[_to.getMonth()];

	// Format years as 2-digit
	const fromYear: string = from.getFullYear().toString().slice(-2);
	const toYear: string = _to.getFullYear().toString().slice(-2);

	// Calculate duration
	const yearDiff: number = _to.getFullYear() - from.getFullYear();
	const monthDiff: number = _to.getMonth() - from.getMonth() + 1; // +1 to make it inclusive

	// Calculate total months for cases where we need to adjust
	const totalMonths: number = yearDiff * 12 + monthDiff;

	// Calculate years and remaining months
	const durationYears: number = Math.floor(totalMonths / 12);
	const durationMonths: number = totalMonths % 12;

	// Format the duration string
	let durationStr = '';

	if (durationYears > 0) {
		durationStr += `${durationYears} year${durationYears !== 1 ? 's' : ''}`;

		if (durationMonths > 0) {
			durationStr += `, ${durationMonths} month${durationMonths !== 1 ? 's' : ''}`;
		}
	} else {
		durationStr = `${durationMonths} month${durationMonths !== 1 ? 's' : ''}`;
	}

	if (!to) {
		return `${fromMonth} ${fromYear} - Present (${durationStr})`;
	}

	// Format the final string
	return `${fromMonth} ${fromYear} - ${toMonth} ${toYear} (${durationStr})`;
}

export default formatDate;
