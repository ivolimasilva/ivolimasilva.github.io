/**
 * Formats a date range with month abbreviations and year shorthand,
 * including the duration in years and months.
 *
 * @param {Date} from - Start date
 * @param {Date} to - End date
 * @returns {string} Formatted date range with duration
 */
function formatDate(from: Date, to: Date): string {
	// Make sure dates are valid
	if (!(from instanceof Date) || !(to instanceof Date) || Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
		throw new Error('Invalid date input');
	}

	// Extract month names and years
	const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const fromMonth: string = months[from.getMonth()];
	const toMonth: string = months[to.getMonth()];

	// Format years as 2-digit
	const fromYear: string = from.getFullYear().toString().slice(-2);
	const toYear: string = to.getFullYear().toString().slice(-2);

	// Calculate duration
	const yearDiff: number = to.getFullYear() - from.getFullYear();
	const monthDiff: number = to.getMonth() - from.getMonth() + 1; // +1 to make it inclusive

	// Calculate total months for cases where we need to adjust
	let totalMonths: number = yearDiff * 12 + monthDiff;

	// Calculate years and remaining months
	const durationYears: number = Math.floor(totalMonths / 12);
	const durationMonths: number = totalMonths % 12;

	// Format the duration string
	let durationStr: string = '';

	if (durationYears > 0) {
		durationStr += `${durationYears} year${durationYears !== 1 ? 's' : ''}`;

		if (durationMonths > 0) {
			durationStr += `, ${durationMonths} month${durationMonths !== 1 ? 's' : ''}`;
		}
	} else {
		durationStr = `${durationMonths} month${durationMonths !== 1 ? 's' : ''}`;
	}

	// Format the final string
	return `${fromMonth} ${fromYear} - ${toMonth} ${toYear} (${durationStr})`;
}

export default formatDate;
