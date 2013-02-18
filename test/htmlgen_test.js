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

  single_file_with_template: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/single_file.html');
    var expected = grunt.file.read('test/expected/single_file.html');
    test.equal(actual, expected, 'should generate a HTML with a script and a style that are applied template in their names');

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
  },

  custom_charset: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/custom_charset.html');
    var expected = grunt.file.read('test/expected/custom_charset.html');
    test.equal(actual, expected, 'should generate a HTML with no script and style');

    test.done();
  },

  sample: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/sample.html');
    var expected = grunt.file.read('test/expected/sample.html');
    test.equal(actual, expected, 'should generate a HTML in sample readme correctly');

    test.done();
  }

};
