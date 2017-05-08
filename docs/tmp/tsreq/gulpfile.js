var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var paths = {
    lib: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.min.js',
        'node_modules/angular2/bundles/angular2-polyfills.min.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/reflect-metadata/Reflect.js'
    ],
    ts: [
        '!src/app/**/*.spec.ts',
        'src/app/**/*.ts'
    ],
    js: [
        '!src/app/**/*.spec.js',
        'src/*/**/*.js'
    ],
    test: [
        'src/app/**/*.spec.js',
    ],
    html: [
        'src/*/**/*.html',
        'src/*/**/*.htm'
    ],
    css: [
        'src/app/**/*.css'
    ]
};
/**
 * Remove build directory.
 */
gulp.task("clean", function (cb) {
    return del(["build"], cb);
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", function () {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});
gulp.task('lib', function () {
    return gulp.src(paths.lib)
        .pipe(gulp.dest("build"));
});
gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest("build"));
});
gulp.task('ts', function () {
    return gulp.src(paths.ts)
        .pipe(gulp.dest("build"));
});
gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest("build"));
});
/**
 * Set the watch task for gulp to watch application files
 */
gulp.task("watch", ["compile"], function () {
    gulp.watch(paths.lib);
    gulp.watch(paths.html);
    gulp.watch(paths.ts);
    gulp.watch(paths.js);
    gulp.watch(paths.css);
    gulp.watch('package.json');
});
/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", function () {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'angular2/bundles/angular2-polyfills.min.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.min.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js',
        'zone.js/dist/zone.min.js',
        'reflect-metadata/Reflect.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});
/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], function () {
    console.log("Building the project ...");
});
