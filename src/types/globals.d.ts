interface Entity {
	name: string;
	url: string;
}

interface ExperienceEntry {
	organization: string;
	url: string;
	location: string;
	entries: {
		title: string;
		description: string[];
		stack?: Entity[];
		startDate: Date;
		endDate: Date;
	}[]
}
