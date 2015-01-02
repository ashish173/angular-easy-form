module.exports = (grunt) ->
  # -----------------------------------
  # load Plugins
  # -----------------------------------
  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  appConfig =
    config:
      src: "config/grunt/*"

    paths:
      dist: "dist"
      src: "src"
      demo: 'demo'
      tmp: ".tmp"


  grunt.config.init
    compass:
      options:
        sassDir: "demo/styles"
        cssDir: ".tmp/styles"
        generatedImagesDir: "#{appConfig.paths.tmp}/images/generated"
        imagesDir: "#{appConfig.paths.demo}/images"
        javascriptsDir: "#{appConfig.paths.demo}/scripts"
        fontsDir: "#{appConfig.paths.demo}/fonts"
        importPath: "./bower_components"
        httpImagesPath: "/images"
        httpGeneratedImagesPath: "/images/generated"
        httpFontsPath: "/fonts"
        relativeAssets: false
        assetCacheBuster: false
        raw: "Sass::Script::Number.precision = 10\n"

      dist:
        options:
          debugInfo: false

      server:
        options:
          debugInfo: true
          watch: false

      dev:
        options:
          debugInfo: true
          watch: true

    clean:
      dist:
        files: [
          {
            dot: true
            src: ['dist']
          }
        ]
      dev:
        files: [
          {
            dot: true
            src: ['.tmp']
          }
        ]
      docs:
        files: [
          {
            dot: true
            src: ['docs']
          }
        ]

    coffee:
      api:
        expand: true
        cwd: 'src'
        src: ['module.coffee'
              'providers/*.coffee'
              'directives/*.coffee'
              'default/*.coffee']
        dest: '.tmp/scripts'
        ext: '.js'
      demo:
        files:
          '.tmp/scripts/demo.js': 'demo/scripts/demo.coffee'

    jade:
      options:
        sourceMap: true
        sourceRoot: ""

      index:
        options:
          pretty: true
        files: [
          expand: true
          pretty: true
          cwd: "#{appConfig.paths.demo}"
          src: "*.jade"
          dest: "#{appConfig.paths.tmp}"
          ext: ".html"
        ]

    concat:
      options:
        separator: ';'
      dist:
        src: ['.tmp/scripts/module.js'
              '.tmp/scripts/providers/*.js'
              '.tmp/scripts/directives/*.js'
              '.tmp/scripts/default/*.js'
              '.tmp/scripts/templates.js']
        dest: 'dist/angular-easy-form.js'

    ngAnnotate:
      options:
        singleQuotes: true
      dist:
        files:
          'dist/angular-easy-form.js': ['dist/angular-easy-form.js']

    uglify:
      build:
        files:
          'dist/angular-easy-form.min.js': 'dist/angular-easy-form.js'

    watch:
      coffee:
        files: ['src/**/*.coffee', 'demo/**/*.coffee']
        tasks: ['coffee']
        options:
          spawn: no
      jade:
        files: ["demo/index.jade"]
        tasks: ["jade"]
      html2js:
        files: ['src/templates/**/*.html']
        tasks: ['html2js']
      livereload:
        options:
          livereload: "<%= connect.options.livereload %>"
          spawn: false
        files: [
          "#{appConfig.paths.demo}/*.html"
          "#{appConfig.paths.tmp}/styles/{,*/}{,*/}{,*/}*.css"
          "#{appConfig.paths.tmp}/scripts/**/*.js"
          "#{appConfig.paths.tmp}/views/**/*.html"
          "#{appConfig.paths.app}/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]

    html2js:
      options:
        base: '.'
        module: 'easy.form.templates'
        rename: (modulePath) ->
          moduleName = modulePath.replace('src/', '').replace('.html', '');
          return 'easy-form' + '/' + moduleName + '.html'
      default:
        src: ['src/templates/**/*.html']
        dest: '.tmp/scripts/templates.js'

    connect:
      options:
        port: 9000
        hostname: "localhost"
        livereload: 35729

      livereload:
        options:
          open: true
          middleware: (connect) ->
            [
              connect.static(".tmp")
              connect.static('demo')
              connect().use("/bower_components", connect.static("./bower_components"))
            ]

    karma:
      dev:
        configFile: 'test/karma-dev.conf.js'
      dist:
        configFile: 'test/karma-dist.conf.js'

    wiredep:
      demo:
        src: ['demo/index.jade']
        ignorePath: /\.\.\//

      sass:
        src: ["#{appConfig.paths.demo}/styles/{,*/}*.{scss,sass}"]
        ignorePath: /(\.\.\/){1,2}bower_components\//

      test:
        src: ['test/karma.conf.coffee'],
        ignorePath: '../'
        devDependencies: true
        fileTypes:
          js:
            block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {}
            replace:
              js: '\'{{filePath}}\','

    ngdocs:
      options:
        dest: 'docs'
        title: "Angular Easy form"
        startPage: '/api'
      api:
        src: ['.tmp/module.js',
              '.tmp/providers/*.js',
              '.tmp/directives/input.js']
        title: 'API Documentation'
      tutorial:
        src: 'content/tutorial/*.ngdoc'
        title: 'Tutorial'

    # Run some tasks in parallel to speed up the build process
    concurrent:
      dev: [
        "coffee"
        "jade"
        "compass:server"
      ]
      test: [
        "coffee"
        "jade"
        "compass:server"
      ]
      dist: [
        "coffee"
        "jade"
      ]
  # -----------------------------------
  # register task
  # -----------------------------------

  grunt.registerTask 'dev', [
    'clean:dev'
    'wiredep'
    "concurrent:dev"
    'html2js'
    'connect:livereload'
    'watch'
  ]
  grunt.registerTask 'build', [
    'clean'
    'wiredep'
    "concurrent:dist"
    'html2js'
    'concat'
    'ngAnnotate'
    'uglify'
  ]
  grunt.registerTask 'test', ['karma']
  grunt.registerTask 'docs', [
    'clean:docs',
    'build'
    'ngdocs'
  ]
