module.exports = (grunt) ->

  grunt.config.init
    compass:
      dev:
        options:
          sassDir: 'example'
          cssDir: 'example'
          outputStyle: 'compressed'

    coffee:
      source:
        files:
          'dist/angular-form.js': ['src/**/*.coffee']
      rules:
        files:
          'dist/angular-validator-rules.js': ['rules/*.coffee']
      demo:
        files:
          'example/demo.js': 'example/demo.coffee'

    uglify:
      build:
        files:
          'dist/angular-validator.min.js': 'dist/angular-validator.js'
          'dist/angular-validator-rules.min.js': 'dist/angular-validator-rules.js'

    watch:
      compass:
        files: ['example/*.scss']
        tasks: ['compass']
        options:
          spawn: no
      coffee:
        files: ['src/*.coffee', 'rules/*.coffee', 'example/*.coffee']
        tasks: ['coffee']
        options:
          spawn: no

    connect:
      server:
        options:
          protocol: 'http'
          hostname: '*'
          port: 8000
          base: '.'

    karma:
      configFile: 'test/karma.conf.coffee'

    wiredep:
      test:
        src: ['test/karma.conf.coffee'],
        ignorePath: '../'
        devDependencies: true
        fileTypes:
          js:
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {}
            replace:
#              js: '\'{{filePath}}\','
              js: (filePath)->
                console.log filePath


  # -----------------------------------
  # register task
  # -----------------------------------
  grunt.registerTask 'dev', [
    'compass'
    'coffee'
    'connect'
    'watch'
  ]
  grunt.registerTask 'build', [
    'compass'
    'coffee'
    'uglify'
  ]
  grunt.registerTask 'test', ['karma']

  # -----------------------------------
  # Plugins
  # -----------------------------------
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-wiredep'
