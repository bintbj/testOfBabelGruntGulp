module.exports = function (grunt) {
	//自定义任务的配置
	grunt.initConfig({
		jshint: {
			src: 'src/test.js'
		},
		uglify: {
			build: {
				src: 'src/test.js',
				dest: "build/test.min.js"
			}
		}
	});
	//将两个任务插件导入
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//注册自定义任务，jshint和uglify的组合
	grunt.registerTask('default', ['jshint', 'uglify']);

}