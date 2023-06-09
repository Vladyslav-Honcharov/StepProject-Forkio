import imagemin from "gulp-imagemin";

export const images = () => {
  return (
    app.gulp
      .src(app.path.src.images, { sourcemaps: true })
      .pipe(app.plugins.plumber())
      .pipe(app.plugins.newer(app.path.dist.images))
      //   .pipe(app.plugins.if(
      //      app.isBuild,
      //      webp())
      //   )
      //   .pipe(app.plugins.if(
      //      app.isBuild,
      //      app.gulp.dest(app.path.dist.images))
      //   )
      //   .pipe(app.plugins.if(
      //      app.isBuild,
      //      app.gulp.src(app.path.src.images))
      //   )
      //   .pipe(app.plugins.if(
      //      app.isBuild,
      //      app.gulp.dest(app.path.dist.images))
      //   )
      //   .pipe(app.plugins.if(
      //      app.isBuild,
      //      app.plugins.newer(app.path.dist.images))
      //   )
      .pipe(
        imagemin({
          progressive: true,
          svgPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3, // 0 to 7
        })
      )
      .pipe(app.gulp.dest(app.path.dist.images))
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.dist.images))
      .pipe(app.plugins.browsersync.stream())
  );
};
