const { src, dest, watch, parallel, series } = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/slick-carousel/slick/slick.js",
    "app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function svgSprites() {
  return src("app/images/ico/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "sprite.svg",
          },
        },
      })
    )
    .pipe(dest("app/images"));
}

function styles() {
  return src("app/scss/style.scss")
    .pipe(autoprefixer({ overrideBrowserlist: ["last 10 version"] }))
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "expanded" }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function building() {
  return src(["app/**/*.html", "app/css/style.min.css", "app/js/main.min.js"], {
    base: "app",
  }).pipe(dest("dist"));
}

function cleanDist() {
  return src("dist").pipe(clean());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/images/icons/*.svg"], svgSprites);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}

function browsersync() {}

exports.svgSprites = svgSprites;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, building, images);
exports.default = parallel(
  svgSprites,
  styles,
  scripts,
  images,
  building,
  browsersync,
  watching
);
