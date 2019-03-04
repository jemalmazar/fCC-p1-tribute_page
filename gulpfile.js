let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

gulp.task('minify-css', () => {
    return gulp.src('./style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'));
    });

gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./style.css', ['minify-css']).on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);