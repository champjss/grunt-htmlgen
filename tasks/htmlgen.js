'use strict';

module.exports = function(grunt) {

  var createHTMLString = function(options) {
    var recurse  = grunt.util.recurse,
        kindOf   = grunt.util.kindOf,
        linefeed = grunt.util.linefeed,
        content = '';

    content += '<!doctype html>' + linefeed;
    content += '<html>' + linefeed;
    content += '<head>' + linefeed;

    if (kindOf(options.charset) === 'string') {
      content += '<meta charset="' + options.charset + '">' + linefeed;
    }

    if (kindOf(options.title) === 'string') {
      content += '<title>' + options.title + '</title>' + linefeed;
    }

    recurse(options.css, function(href) {
      if (kindOf(href) === 'string') {
        content += '<link rel="stylesheet" type="text/css" href="' + href + '">' + linefeed;
      }
    });

    content += '</head>' + linefeed;
    content += '<body>' + linefeed;

    if (kindOf(options.body) === 'string') {
      content += options.body + linefeed;
    }

    recurse(options.js, function(src) {
      if (kindOf(src) === 'string') {
        content += '<script src="' + src + '"></script>' + linefeed;
      }
    });

    content += '</body>' + linefeed;
    content += '</html>' + linefeed;

    return content;
  };

  grunt.registerMultiTask('htmlgen', 'Generate HTML', function() {
    var options = this.options({
          charset: 'utf-8'
        }),
        content = createHTMLString(options);

    this.files.forEach(function(file) {
      grunt.file.write(file.dest, content);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
