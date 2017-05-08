const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");

const paths = {
  lib: [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.min.js',
    'node_modules/angular2/bundles/angular2-polyfills.min.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/@angular/router/bundles/router.umd.min.js'
  ],
  ts: [
    '!src/app/**/*.spec.ts',
    'src/app/**/*.ts'
  ],
  js: [
    '!src/app/**/*.spec.js',
    'src/app/**/*.js'
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
gulp.task("clean", (cb) => {
  return del(["build"], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", () => {
  var tsResult = gulp.src("src/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build"));
});

gulp.task("lib", () => {
  return gulp.src(paths.lib)
    .pipe(gulp.dest("build"));
});

gulp.task("html", () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest("build"));
});

gulp.task("ts", () => {
  var tsResult = gulp.src("src/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build"));
  /*
  return gulp.src(paths.ts)
    .pipe(gulp.dest("build"));
    */
});

gulp.task("js", () => {
  return gulp.src(paths.js)
    .pipe(gulp.dest("build"));
});

gulp.task("css", () => {
  return gulp.src(paths.css)
    .pipe(gulp.dest("build"));
});

/**
 * Set the watch task for gulp to watch application files
 */
gulp.task("watch", () => {
  gulp.watch(paths.lib, ["lib"]);
  gulp.watch(paths.html, ["html"]);
  gulp.watch(paths.ts, ["ts"]);
  gulp.watch(paths.js, ["js"]);
  gulp.watch(paths.css, ["css"]);
  gulp.watch('package.json');
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
  return gulp.src(["src/**/*", "!**/*.ts"])
    .pipe(gulp.dest("build"))
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
  return gulp.src([
      'es6-shim/es6-shim.min.js',
      'systemjs/dist/system-polyfills.js',
      'angular2/bundles/angular2-polyfills.min.js',
      'systemjs/dist/system.src.js',
      'rxjs/bundles/Rx.min.js',
      'angular2/bundles/angular2.dev.js',
      'angular2/bundles/router.dev.js',
      'angular2/bundles/http.js',
      '@angular/**',
      'zone.js/dist/zone.min.js',
      'reflect-metadata/Reflect.js'
    ], {cwd: "node_modules/**"}) /* Glob required here. */
    .pipe(gulp.dest("build/lib"));
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
  console.log("Building the project ...")
});