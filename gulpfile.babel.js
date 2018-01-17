import autoprefixer from 'autoprefixer';
import BrowserSync from 'browser-sync';
import { spawn } from 'child_process';
import cssnano from 'cssnano';
import del from 'del';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import watch from 'gulp-watch';
import hugoBin from 'hugo-bin';
import webpack from 'webpack';

import webpackConfig from './webpack.config';

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["clean", "sass", "js", "ie", "img", "static"], (cb) => buildSite(cb, [], "production"));

gulp.task("build-preview", ["clean", "sass", "ie", "js", "img", "static"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

gulp.task("sass", () =>
  gulp
    .src("./src/sass/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(browserSync.stream())
);

gulp.task("ie", () =>
  gulp
    .src(["./src/sass/ie8.scss", "./src/sass/ie9.scss"])
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(browserSync.stream())
);

gulp.task("img", () =>
  gulp
    .src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/img"))
);

gulp.task("static", () =>
  gulp
    .src("./src/static/**/*")
    .pipe(gulp.dest("./dist/assets"))
    .pipe(browserSync.stream())
);

gulp.task("clean", () => {
  return del.sync("dist");
});

// Compile Javascript
gulp.task("js", () => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    browserSync.reload();
  });
});

// Development server with browser sync
gulp.task("server", ["hugo", "sass", "js", "img", "static"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch("./src/sass/**/*.scss", () => {
    gulp.start(["sass"]);
  });
  watch("./src/js/**/*.js", () => {
    gulp.start(["js"]);
  });
  watch("./src/img/**/*", () => {
    gulp.start(["img"]);
  });
  watch("./src/assets/**/*", () => {
    gulp.start(["static"]);
  });
  watch("./site/**/*", () => {
    gulp.start(["hugo"]);
  });
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {
    stdio: "inherit"
  }).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
