const withImages = require('next-images');
const withReactSVG = require('next-react-svg');

module.exports = withReactSVG(
	withImages({
		include: /\.inline\.svg$/, // for next-react-svg
		exclude: /\.inline\.svg$/, // for next-images
	}),
);
