module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    clean: {
      test: ['tmp/*']
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    htmlgen: {
      single_file: {
        title: 'Title',
        css: 'styles/style.css',
        js: 'scripts/script.js',
        dest: 'tmp/single_file.html'
      },
      multiple_files: {
        title: 'Title',
        css: ['styles/style1.css', 'styles/style2.css', 'styles/style3.css'],
        js: ['scripts/script1.js', 'scripts/script2.js', 'scripts/script3.js'],
        dest: 'tmp/multiple_files.html'
      },
      no_file: {
        dest: 'tmp/no_file.html'
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'jshint', 'htmlgen', 'nodeunit']);
  grunt.registerTask('default', ['test']);

};
