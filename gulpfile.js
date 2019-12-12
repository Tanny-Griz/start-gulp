var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('mytask', function() {
    console.log('test');
});

// gulp.task('mytask-2', function() {
//     return gulp.src('input/files') // откуда
//         .pipe(plugin()) // обработка
//         .pipe(gulp.dest('/output')); // папка назначения
// });

gulp.task('sass', function() {
     return gulp.src('dev/scss/**/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('dev/css/'))
         .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src('dev/*.html')
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('dev/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('dev/*.html', gulp.parallel('html'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dev' // корневая папка
        },
        notify: false //отмена уведомлений
    })
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'))