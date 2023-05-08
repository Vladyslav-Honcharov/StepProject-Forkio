import { deleteAsync as del } from "del";

export const clear = () => {
  return del([app.path.clean, app.path.cleanHtml, app.path.versionJson]);
};
