gulp = require 'gulp'
coffee = require 'gulp-coffee'

paths = 
    scripts: ['*/*.coffee']


gulp.task 'scripts', ->
    gulp.src(paths.scripts)
      .pipe(coffee())
    .pipe(gulp.dest './')

gulp.task 'watch', ->
    gulp.watch paths.scripts, ['scripts']

gulp.task 'default', ['watch', 'scripts']