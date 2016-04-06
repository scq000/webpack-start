module.exports = {
	entry: __dirname + '/src',
	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	},
	output: {
		path: './dist',
		filename: 'bundle.js'
	}
};
