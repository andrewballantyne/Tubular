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
      binJS: {
        src: [
          'dev/src/**/*.js'
        ],
        dest: 'dev/bin/lib.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat:externalJS', 'concat:externalCSS', 'concat:binJS']);
  grunt.registerTask('dev', ['concat:binJS']);
};