/* eslint-disable max-len */
/* eslint-disable babel/camelcase */

module.exports = {
    siteMetadata: {
        title: 'Ivo Lima Silva • Full-Stack Developer 💻',
        description: 'Full-Stack Developer based in Porto, Portugal. Former Technical Lead Developer at MOXY.studio. Lifelong learner pursuing a career in Product Development. Interested in 3D, Photography, UI/UX and Programming.',
        author: '@ivolimasilva_',
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/shared/layouts'),
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Ivo Lima da Silva • Full-Stack Developer 💻',
                short_name: 'Ivo Lima Silva',
                start_url: '/',
                icon: 'src/shared/media/images/favicon.png',
            },
        },
    ],
};
