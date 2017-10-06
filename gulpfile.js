// Amended gist: https://gist.github.com/Fishrock123/8ea81dad3197c2f84366

var gulp = require('gulp')

var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var merge = require('utils-merge')

var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')


/* nicer browserify errors */
var gutil = require('gulp-util')
var chalk = require('chalk')

function map_error(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description))
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message))
    }

    this.end()
}
/* */

gulp.task('watchify', function () {
    var args = merge(watchify.args, { debug: true })
    var bundler = watchify(browserify('./src/index.js', args)).transform(babelify, { /* opts */ })
    bundle_js(bundler)

    bundler.on('update', function () {
        bundle_js(bundler)
    })
})

function bundle_js(bundler) {
    return bundler.bundle()
        .on('error', map_error)
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('app/dist'))
        .pipe(rename('index.min.js'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        // capture sourcemaps from transforms
        .pipe(uglify().on('error', (err) => {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
            this.emit('end');
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/dist'))
}

// Without watchify
gulp.task('browserify', function () {
    var bundler = browserify('./src/index.js', { debug: true }).transform(babelify, { presets: ['es2015'] })

    return bundle_js(bundler)
})

// Without sourcemaps
gulp.task('browserify-production', function () {
    var bundler = browserify('./src/index.js').transform(babelify, { presets: ['es2015'] })

    return bundler.bundle()
        .on('error', map_error)
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(rename('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist'))
})