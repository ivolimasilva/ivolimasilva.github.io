/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable strict */

const path = require('path');
const preset = require('@moxy/postcss-preset');

const config = preset({ mixins: { mixinsDir: path.join(__dirname, './styles/mixins') } });

module.exports = {
	...config,
	plugins: {
		...config.plugins,
		[require.resolve('postcss-flexbugs-fixes')]: {},
	},
};
