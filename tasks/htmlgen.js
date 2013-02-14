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
    content += '<meta charset="utf-8">' + linefeed;

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
    var options = this.options(),
        content = createHTMLString(options);

    this.files.forEach(function(file) {
      grunt.file.write(file.dest, content);
    });
  });

};
