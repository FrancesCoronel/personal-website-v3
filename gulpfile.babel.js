import {spawn} from "child_process";
import autoprefixer from "autoprefixer";
import brotli from "gulp-brotli";
import BrowserSync from "browser-sync";
import cssnano from "cssnano";
import csso from "postcss-csso";
import del from "del";
import gulp from "gulp";
import gutil from "gulp-util";
import gzip from "gulp-gzip";
import htmlmin from "gulp-htmlmin";
import hugoBin from "hugo-bin";
import imagemin from "gulp-imagemin";
import postcss from "gulp-postcss";
import runSequence from "run-sequence";
import sass from "gulp-sass";
import shell from "gulp-shell";
import sourcemaps from "gulp-sourcemaps";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.config";

// Browser Sync
const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site"];

// Verbose Hugo arguments
// const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-build", shell.task(["hugo"]));

// Build/production tasks
gulp.task("build", ["clean", "hugo", "sass", "js", "img", "static"], (cb) => buildSite(cb, [], "production"));

gulp.task("build-html", ["clean", "hugo", "sass", "js", "img", "static"], (callback) => {
  runSequence("minify", callback);
});

// Development server with browser sync
gulp.task(
  "server",
  ["hugo", "js", "sass", "img", "static"],
  () =>
    browserSync.init({
      server: {
        baseDir: "./dist"
      }
    }),
  watch("./src/sass/**/*.scss", () => {
    gulp.start(["sass"]);
  }),
  watch("./src/js/**/*.js", () => {
    gulp.start(["js"]);
  }),
  watch("./src/img/**/*", () => {
    gulp.start(["img"]);
  }),
  watch("./src/assets/**/*", () => {
    gulp.start(["static"]);
  }),
  watch("./site/**/*", () => {
    gulp.start(["hugo"]);
  })
);

// Run Hugo and build site
const buildSite = (cb, options, environment = "development") => {
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
};

// Minify HTML
gulp.task("minify", () =>
  gulp
    .src("./dist/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true
      })
    )
    .pipe(
      brotli.compress({
        skipLarger: true,
        mode: 0,
        quality: 11,
        lgblock: 0
      })
    )
    .pipe(
      gzip({
        skipGrowingFiles: true
      })
    )
    .pipe(gulp.dest("./dist"))
);

// Compress SASS
gulp.task("sass", () =>
  gulp
    .src("./src/sass/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano(), csso()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(browserSync.stream())
);

// Compress images
gulp.task("img", () =>
  gulp
    .src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/img"))
);

// Copy static files
gulp.task("static", () =>
  gulp
    .src("./src/static/**/*")
    .pipe(gulp.dest("./dist/assets"))
    .pipe(browserSync.stream())
);

// Clean up dist
gulp.task("clean", () => del.sync("dist"));

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
