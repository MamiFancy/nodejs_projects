module.exports=function(grunt){
	grunt.initConfig({
		uglify:{
			options: {
				banner: '/*'
			},
			build:{
				src: 'app.js',
				dest: 'dst/core.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};