/**
 * Created by Andrew on 10/23/15.
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      externalJS: {
        src: [
          'bower_components/mithril/mithril.min.js',
          'bower_components/jquery/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'dev/bin/external.min.js'
      },
      externalCSS: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'dev/bin/external.min.css'
      },
      devCSS: {
        src: [
          'dev/src/styles/**/*.css'
        ],
        dest: 'dev/bin/lib.css'
      }
    },
    ts: {
      dev: {
        src: 'dev/src/ref.d.ts',
        out: 'dev/bin/lib.js',
        target: 'ES5',
        sourceMap: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', ['external', 'dev']);
  grunt.registerTask('external', ['concat:externalJS', 'concat:externalCSS']);
  grunt.registerTask('dev', ['ts:dev', 'concat:devCSS']);
};