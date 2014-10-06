module.exports = (grunt) ->

  grunt.config.init
    coffee:
      source:
        files:
          'tmp/angular-form.js': ['src/module.coffee'
                                  'src/providers/*.coffee'
                                  'src/directives/*.coffee'
                                  'src/components/*.coffee'
                                  'src/default/*.coffee']

    concat:
      options:
        separator: ';'
      dist:
        src: ['tmp/angular-form.js', 'tmp/angular-form.templates.js']
        dest: 'dist/angular-form.js'

    ngAnnotate:
      options:
        singleQuotes: true
      dist:
        files:
          'dist/angular-form.js': ['dist/angular-form.js']

    uglify:
      build:
        files:
          'dist/angular-form.min.js': 'dist/angular-form.js'

    watch:
      coffee:
        files: ['src/*.coffee', 'rules/*.coffee', 'example/*.coffee']
        tasks: ['coffee']
        options:
          spawn: no

    html2js:
      options:
        base: '.'
        module: 'easy.form.templates'
        rename: (modulePath) ->
          moduleName = modulePath.replace('src/', '').replace('.html', '');
          return 'easy-form' + '/' + moduleName + '.html'
      default:
        src: ['src/templates/**/*.html']
        dest: 'tmp/angular-form.templates.js'

    connect:
      server:
        options:
          protocol: 'http'
          hostname: '*'
          port: 8000
          base: '.'

    karma:
      dev:
        configFile: 'test/karma-dev.conf.js'
      dist:
        configFile: 'test/karma-dist.conf.js'

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
    'coffee'
    'connect'
    'watch'
  ]
  grunt.registerTask 'build', [
    'coffee'
    'html2js'
    'concat'
    'ngAnnotate'
    'uglify'
  ]
  grunt.registerTask 'test', ['karma']

  # -----------------------------------
  # Plugins
  # -----------------------------------
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-wiredep'
  grunt.loadNpmTasks 'grunt-html2js'
  grunt.loadNpmTasks('grunt-ng-annotate')
