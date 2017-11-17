import gulp from "gulp";
import { spawn } from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import sass from "gulp-sass";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", cb => buildSite(cb));
gulp.task("hugo-preview", cb => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["sass", "js"], cb => buildSite(cb, [], "production"));

gulp.task("build-preview", ["sass", "js"], cb =>
  buildSite(cb, hugoArgsPreview, "production")
);

gulp.task("sass", () =>
  gulp
    .src("./src/sass/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

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
gulp.task("server", ["hugo", "sass", "js"], () => {
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
  }).on("close", code => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
