var grunt = require('grunt');

exports.htmlgen = {

  single_file: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/single_file.html');
    var expected = grunt.file.read('test/expected/single_file.html');
    test.equal(actual, expected, 'should generate a HTML with a script and a style');

    test.done();
  },

  multiple_files: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/multiple_files.html');
    var expected = grunt.file.read('test/expected/multiple_files.html');
    test.equal(actual, expected, 'should generate a HTML with multiple scripts and styles');

    test.done();
  },

  no_file: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/no_file.html');
    var expected = grunt.file.read('test/expected/no_file.html');
    test.equal(actual, expected, 'should generate a HTML with no script and style');

    test.done();
  }

};
