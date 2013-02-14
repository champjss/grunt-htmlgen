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
    this.files.forEach(function(f) {
      var content = createHTMLString(f);
      grunt.file.write(f.dest, content);
    });
  });

};
