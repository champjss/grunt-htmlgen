# grunt-htmlgen

[Grunt](http://gruntjs.com) (0.4.x) task to generate HTML files with stylesheet and script elements.

## Configuration

htmlgen is a [multi task](https://github.com/gruntjs/grunt/wiki/Configuring-tasks) so any targets, files and options should be specified according to the multi task documentation.

## Options

### dest
[String] Location of the generated HTML file.

### title
[String] Title of the page to generate (optional).

### css (optional)
[String|Array] URL or array of URLs of stylesheets to include (optional).

### js (optional)
[String|Array] URL or array of URLs of scripts to include (optional).

## Samples

### ``Gruntfile.js``

    module.exports = function(grunt) {
      'use strict';

      grunt.initConfig({
        htmlgen: {
          index: {
            title: 'Title',
            css: ['styles/style1.css', 'styles/style2.css', 'styles/style3.css'],
            js: ['scripts/script1.js', 'scripts/script2.js', 'scripts/script3.js'],
            dest: 'tmp/index.html'
          }
        }
      });

      grunt.loadNpmTasks('grunt-htmlgen');
      grunt.registerTask('default', ['htmlgen']);

    };

### Result after run ``grunt`` (index.html)

    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="styles/style1.css">
    <link rel="stylesheet" type="text/css" href="styles/style2.css">
    <link rel="stylesheet" type="text/css" href="styles/style3.css">
    </head>
    <body>
    <script src="scripts/script1.js"></script>
    <script src="scripts/script2.js"></script>
    <script src="scripts/script3.js"></script>
    </body>
    </html>
