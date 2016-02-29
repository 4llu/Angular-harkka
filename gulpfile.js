var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");

// Default
gulp.task("default", ["styles", "watch"]);

// compile sass
gulp.task("styles", function () {
    return gulp.src("assets/styles/sass/style.scss")
        // Sass
        .pipe(sass({
            includePaths: require("node-neat").includePaths,
            style: "compressed"
        }).on("error", sass.logError))
        // Prefixes
        .pipe(autoprefixer({
            browsers: ["> 1%"],
            cascade: false
        }))
        .pipe(gulp.dest("assets/styles"));
});

// watch
gulp.task("watch", function() {
    gulp.watch("assets/styles/sass/**/*.scss", ["styles"]);
})

gulp.task("production", function() {
    return gulp.src("assets/styles/style.css")
    // Minify
        .pipe(cleanCSS({
            compatibility: "ie8"
        }))
        .pipe(gulp.dest("assets/styles"));
})
