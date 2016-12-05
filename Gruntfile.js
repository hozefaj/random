module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        node: true,
        devel: true
      },
      all: ['script/*.js']
    },
    csslint: {
      src: ['styles/*.css']
    }
  });

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-csslint');

grunt.registerTask('test', ['jshint', 'csslint']);
};
