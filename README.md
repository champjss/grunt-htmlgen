# grunt-htmlgen [![Build Status](https://travis-ci.org/champjss/grunt-htmlgen.png?branch=master)](https://travis-ci.org/champjss/grunt-htmlgen)

[Grunt](http://gruntjs.com) (0.4.x) task to generate HTML files with stylesheet and script elements.

## Configuration

htmlgen is a [multi task](https://github.com/gruntjs/grunt/wiki/Configuring-tasks) so any targets, files and options should be specified according to the multi task documentation.

Brief configuration guide:

1. Add grunt-htmlgen in ``devDependency`` in ``package.json``.
2. Run ``npm install`` in your project's directory to install the dependencies.
3. Edit ``Gruntfile.js`` to use this task:
    1. Add ``grunt.loadNpmTasks('grunt-htmlgen');``
    2. Add ``htmlgen: { // Your configuration }`` in ``grunt.initConfig``

## Configurations

### dest

Type: `String`

Location of the generated HTML file.

### options (optional)

#### charset (optional)

Type: `String`

Character set of the page (will be used in meta element). Default value is ``utf-8``

#### title (optional)

Type: `String`

Title of the page to generate.

#### css (optional)

Type: `String|Array`

URL or array of URLs of stylesheets to include.

#### js (optional)

Type: `String|Array`

URL or array of URLs of scripts to include.

#### body (optional)

Type: `String`

Body HTML to include in the page.

## Samples

### ``Gruntfile.js``

    module.exports = function(grunt) {
      'use strict';

      grunt.initConfig({
        meta: {
          sample: {
            css_reset: 'styles/reset.css',
            js_index: 'scripts/index.js'
          }
        }
        htmlgen: {
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
        }
      });

      grunt.loadNpmTasks('grunt-htmlgen');
      grunt.registerTask('default', ['htmlgen']);

    };

### Content of ``tmp/sample.html`` after run ``grunt`` or ``grunt:sample``

    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="styles/reset.css">
    <link rel="stylesheet" type="text/css" href="styles/style1.css">
    <link rel="stylesheet" type="text/css" href="styles/style2.css">
    </head>
    <body>
    <script src="scripts/script1.js"></script>
    <script src="scripts/script2.js"></script>
    <script src="scripts/index.js"></script>
    </body>
    </html>

## Release history

* 2013-02-18    v0.1.2    Add charset and body options
* 2013-02-18    v0.1.1    Update development dependencies for Grunt 0.4.0
* 2013-02-14    v0.1.0    Change the configuration by moving title, css, js options into the options.
* 2013-02-14    v0.0.1    First release.

## License

You may use this project under the terms of the MIT License.
