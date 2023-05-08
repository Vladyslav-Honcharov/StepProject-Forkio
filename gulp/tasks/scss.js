import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(app.plugins.notify.onError()))
      // .pipe(sass().on("error", sass.logError))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(groupCssMediaQueries())
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true,
        })
      )
      .pipe(rename({ basename: "view-only", extname: ".css" }))
      .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.dist.css)))
      .pipe(cleanCss())
      .pipe(rename({ basename: "styles.min", extname: ".css" }))
      .pipe(app.gulp.dest(app.path.dist.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
