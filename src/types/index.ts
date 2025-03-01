export interface Entity {
	name: string;
	url: string;
}

export interface Organization {
	name: string;
	url: string;
	location: string;
}

export interface Experience {
	organization: Organization;
	entries: {
		title: string;
		description?: string[];
		stack?: Entity[];
		startDate: Date;
		endDate: Date;
	}[];
}
