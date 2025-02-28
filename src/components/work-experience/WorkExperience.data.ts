const reactjs: Entity = {
	name: 'React.js',
	url: 'https://reactjs.org/',
};

const redux: Entity = {
	name: 'Redux',
	url: 'https://redux.js.org/',
};

const nextjs: Entity = {
	name: 'Next.js',
	url: 'https://nextjs.org/',
};

const nodejs: Entity = {
	name: 'Node.js',
	url: 'https://nodejs.org/en/',
};

const jest: Entity = {
	name: 'Jest',
	url: 'https://jestjs.io/',
};

const testingLibrary: Entity = {
	name: 'Testing Library',
	url: 'https://testing-library.com/',
};

const threejs: Entity = {
	name: 'Three.js',
	url: 'http://threejs.org/',
};

const enzyme: Entity = {
	name: 'Enzyme',
	url: 'https://airbnb.io/enzyme/',
};

const ruby: Entity = {
	name: 'Ruby',
	url: 'https://www.ruby-lang.org/',
};

const bash: Entity = {
	name: 'Bash',
	url: 'https://www.gnu.org/software/bash/',
};

const fastlane: Entity = {
	name: 'Fastlane',
	url: 'https://fastlane.tools/',
};

const jenkins: Entity = {
	name: 'Jenkins',
	url: 'https://jenkins.io/',
};

const testflight: Entity = {
	name: 'Testflight',
	url: 'https://developer.apple.com/testflight/',
};

const mobx: Entity = {
	name: 'MobX',
	url: 'https://mobx.js.org/',
};

const graphql: Entity = {
	name: 'GraphQL',
	url: 'https://graphql.org/',
};

const apollo: Entity = {
	name: 'Apollo',
	url: 'https://www.apollographql.com/',
};

const webdriverio: Entity = {
	name: 'WebdriverIO',
	url: 'https://webdriver.io/',
};

const turborepo: Entity = {
	name: 'Turborepo',
	url: 'https://turborepo.org/',
};

const playwright: Entity = {
	name: 'Playwright',
	url: 'https://playwright.dev/',
};

const mongodb: Entity = {
	name: 'MongoDB',
	url: 'https://www.mongodb.com/',
};

const zustand: Entity = {
	name: 'Zustand',
	url: 'https://github.com/pmndrs/zustand',
};

const radix: Entity = {
	name: 'Radix UI',
	url: 'https://www.radix-ui.com/',
};

const experience: ExperienceEntry[] = [
	{
		organization: 'Motion',
		url: 'https://motionapp.com/',
		location: 'Remote',
		entries: [
			{
				title: 'Lead frontend developer & Engineering Manager',
				description: [
					'Led as the first senior front-end developer, establishing technical standards and practices',
					'Alongside the designer, created a design system unique to the brand and implemented it across the product',
					'Built, managed and scaled the team in regards to frontend development',
					'Delivered full-stack features encompassing UI development, database integration, and external APIs',
					'Established quality assurance framework with E2E tests covering mission-critical workflows',
					'Contributed to organizational strategy by team formation and process implementation decisions',
				],
				stack: [reactjs, graphql, apollo, nextjs, playwright, mongodb, zustand, radix, turborepo],
				startDate: new Date('September 2022'),
				endDate: new Date('December 2024'),
			},
		],
	},
	{
		organization: 'Rows',
		url: 'https://rows.com/',
		location: 'Porto',
		entries: [
			{
				title: 'Senior Frontend Developer',
				description: [
					'Developed interfaces for users to manage and create spreadsheets in real time, focused on user and developer experience',
					'Was responsible to communicate with other teams in order to avoid conflicts in development',
					"Created guidelines and conventions to keep different teams' output consistent",
					'Shared knowledge to other teams in form of talks and documentation',
					'Participated in the recruitment during technical phase',
					'Developed automated functional and visual tests',
				],
				stack: [reactjs, mobx, webdriverio, graphql, apollo, jest, testingLibrary, turborepo],
				startDate: new Date('May 2020'),
				endDate: new Date('June 2022'),
			},
		],
	},
	{
		organization: 'MOXY.studio',
		url: 'https://moxy.studio/',
		location: 'Porto',
		entries: [
			{
				title: 'Technical Lead Developer',
				description: [
					'Responsible for a development team that delivered isomorphic web applications',
					'Coordinated with designers and project managers providing estimates and solutions for the requirements',
					'Directly contacted with clients bridging the development team and the their needs',
					'Participated in the recruitment during technical phase',
				],
				stack: [reactjs, redux, nextjs, nodejs, jest, testingLibrary, threejs],
				startDate: new Date('June 2019'),
				endDate: new Date('February 2020'),
			},
			{
				title: 'Software Developer',
				description: [
					'Was part of a team responsible for implementing several large scale e-Commerce web applications',
					'Translated mock-ups into fully functional responsive web pages',
					'Performed functional and non-functional tests',
				],
				stack: [reactjs, redux, nodejs, jest, enzyme],
				startDate: new Date('November 2017'),
				endDate: new Date('May 2019'),
			},
		],
	},
	{
		organization: 'Blip',
		url: 'https://blip.pt/',
		location: 'Porto',
		entries: [
			{
				title: 'Summer Intern',
				description: [
					'Built a continuous integration and delivery tool to automate the process of testing and delivering iOS apps',
				],
				stack: [ruby, bash, fastlane, jenkins, testflight],
				startDate: new Date('July 2016'),
				endDate: new Date('August 2016'),
			},
		],
	},
];

export default experience;
