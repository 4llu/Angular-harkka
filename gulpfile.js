var gulp = require("gulp");
var sass = require("gulp-sass");

// Default
gulp.task("default", ["styles", "watch"]);

// compile sass
gulp.task("styles", function () {
    return gulp.src("assets/styles/sass/style.scss")
        .pipe(sass({
            includePaths: require("node-neat").includePaths,
            style: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest("public/styles"));
});

// watch
gulp.task("watch", function() {
    gulp.watch("assets/styles/sass/**/*.scss", ["styles"]);
})
