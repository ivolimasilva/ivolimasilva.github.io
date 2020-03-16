export const formatDates = (start, end) => {
    let result;

    const startMonth = Intl.DateTimeFormat('en-US', { month: 'short' }).format(start); /* eslint-disable-line babel/new-cap */
    const startYear = start.getFullYear();

    const endMonth = Intl.DateTimeFormat('en-US', { month: 'short' }).format(end); /* eslint-disable-line babel/new-cap */
    const endYear = end.getFullYear();

    result = `${startMonth} ${startYear} - ${endMonth} ${endYear} (`;

    const diff = new Date(end.getTime() - start.getTime());
    const diffYears = diff.getFullYear() - new Date(0).getFullYear();
    const diffMonths = diff.getMonth();

    if (diffYears) {
        result += `${diffYears} years`;
    }

    if (diffYears && diffMonths) {
        result += ', ';
    }

    if (diffMonths) {
        result += `${diffMonths} months`;
    }

    result += ')';

    return result;
};
