const reactjs = {
    name: 'React.js',
    url: 'https://reactjs.org/',
};

const redux = {
    name: 'Redux',
    url: 'https://redux.js.org/',
};

const nextjs = {
    name: 'Next.js',
    url: 'https://nextjs.org/',
};

const nodejs = {
    name: 'Node.js',
    url: 'https://nodejs.org/en/',
};

const jest = {
    name: 'Jest',
    url: 'https://jestjs.io/',
};

const testingLibrary = {
    name: 'Testing Library',
    url: 'https://testing-library.com/',
};

const threejs = {
    name: 'Three.js',
    url: 'http://threejs.org/',
};

const enzyme = {
    name: 'Enzyme',
    url: 'https://airbnb.io/enzyme/',
};

const ruby = {
    name: 'Ruby',
    url: 'https://www.ruby-lang.org/',
};

const bash = {
    name: 'Bash',
    url: 'https://www.gnu.org/software/bash/',
};

const fastlane = {
    name: 'Fastlane',
    url: 'https://fastlane.tools/',
};

const jenkins = {
    name: 'Jenkins',
    url: 'https://jenkins.io/',
};

const testflight = {
    name: 'Testflight',
    url: 'https://developer.apple.com/testflight/',
};

export default [
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
                startDate: new Date('June 1, 2019'),
                endDate: new Date('February 28, 2020'),
            },
            {
                title: 'Software Developer',
                description: [
                    'Was part of a team responsible for implementing several large scale e-Commerce web applications',
                    'Translated mock-ups into fully functional responsive web pages',
                    'Performed functional and non-functional tests',
                ],
                stack: [reactjs, redux, nodejs, jest, enzyme],
                startDate: new Date('November 6, 2017'),
                endDate: new Date('May 31, 2019'),
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
                startDate: new Date('July 1, 2016'),
                endDate: new Date('August 31, 2016'),
            },
        ],
    },
];
