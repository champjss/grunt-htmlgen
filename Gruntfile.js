module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    meta: {
      single_file_with_template: {
        title: 'Title',
        css: 'styles/style.css',
        js: 'scripts/script.js',
      },
      sample: {
        css_reset: 'styles/reset.css',
        js_index: 'scripts/index.js'
      }
    },
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
        dest: 'tmp/single_file.html',
        options: {
          title: 'Title',
          css: 'styles/style.css',
          js: 'scripts/script.js'
        }
      },
      single_file_with_template: {
        dest: 'tmp/single_file.html',
        options: {
          title: '<%= meta.single_file_with_template.title %>',
          css: '<%= meta.single_file_with_template.css %>',
          js: '<%= meta.single_file_with_template.js %>',
        }
      },
      multiple_files: {
        dest: 'tmp/multiple_files.html',
        options: {
          title: 'Title',
          css: ['styles/style1.css', 'styles/style2.css', 'styles/style3.css'],
          js: ['scripts/script1.js', 'scripts/script2.js', 'scripts/script3.js']
        }
      },
      no_file: {
        dest: 'tmp/no_file.html'
      },
      sample: {
        dest: 'tmp/sample.html',
        options: {
          title: 'Title',
          css: [
            '<%= meta.sample.css_reset %>',
            'styles/style1.css',
            'styles/style2.css'
          ],
          js: [
            'scripts/script1.js',
            'scripts/script2.js',
            '<%= meta.sample.js_index %>'
          ],
        }
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
