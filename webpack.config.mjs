import { dirname } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));

const config = {
	mode: 'development',

	devtool: "inline-source-map",

	module: {
		rules: [ {
			test: /\.gql$/,
			loader: "graphql-tag/loader",
		} ],
	},
};

export default {
	...config,
	entry: './main.js',
	target: 'async-node',
	output: {
		path: `${root}/dist/server`,
	},
};