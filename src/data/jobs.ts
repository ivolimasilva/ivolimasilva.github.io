import type { Experience } from '../types';
import {
	apollo,
	bash,
	enzyme,
	fastlane,
	graphql,
	jenkins,
	jest,
	mobx,
	mongodb,
	nextjs,
	nodejs,
	playwright,
	reactjs,
	redux,
	ruby,
	testflight,
	testingLibrary,
	threejs,
	turborepo,
	webdriverio,
	zustand,
	radix,
} from './technologies';

export const jobs: Experience[] = [
	{
		organization: { name: 'Motion', url: 'https://motionapp.com/', location: 'Remote' },
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
		organization: { name: 'Rows', url: 'https://rows.com/', location: 'Remote' },
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
		organization: { name: 'MOXY.studio', url: 'https://moxy.studio/', location: 'Porto' },
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
				startDate: new Date('Jun 2019'),
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
				startDate: new Date('Novembe 2017'),
				endDate: new Date('May 2019'),
			},
		],
	},
	{
		organization: { name: 'Blip', url: 'https://blip.pt/', location: 'Porto' },
		entries: [
			{
				title: 'Summer Intern',
				description: ['Built a continuous integration and delivery tool to automate the process of testing and delivering iOS apps'],
				stack: [ruby, bash, fastlane, jenkins, testflight],
				startDate: new Date('July 2016'),
				endDate: new Date('August 2016'),
			},
		],
	},
];
