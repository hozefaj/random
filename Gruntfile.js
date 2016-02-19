module.exports = function (grunt) {
    jshint: {
            all: {
                src: 'javascripts/*/**.js',
                options: {
                    node: true,
                    devel: true
                }
            }
        }

    });

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-csslint');

grunt.registerTask('test', ['jshint', 'csslint']);
};