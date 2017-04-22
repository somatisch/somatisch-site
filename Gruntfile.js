module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          loadPath: ['node_modules/foundation-sites/scss'],
          sourcemap: false,
          style: 'compressed'
          // style: 'expanded'
        },
        files: {
          'assets/app.css': 'assets/app.scss',       // 'destination': 'source'
          // 'widgets.css': 'widgets.scss'
        }
      }
      // dist: {
      //   options: {
      //     loadPath: ['node_modules/foundation-sites/scss']
      //   }
      // }
    },
    watch: {
      sass: {
        files: ['assets/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
