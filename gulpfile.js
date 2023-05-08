import gulp from "gulp";

import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { clear } from "./gulp/tasks/clear.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

function watcher() {
  // gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const tasks = gulp.parallel(/* copy,*/ html, scss, js, images);

const dev = gulp.series(clear, tasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, tasks);
const delDist = gulp.series(clear);

export { dev };
export { build };
export { delDist };

gulp.task("default", dev);
