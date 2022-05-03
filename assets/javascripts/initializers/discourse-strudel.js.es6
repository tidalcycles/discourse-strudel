import loadScript from "discourse/lib/load-script";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "discourse-strudel",

  initialize(container) {
    withPluginApi("0.8.22", api => {
      api.decorateCooked($elem => {
        const $strudel = $elem.find("strudel-repl");

        if ($strudel.length) {
          loadScript("/plugins/discourse-strudel/javascripts/embed-strudel.js").then(() => {
          });
        }
      });
    });
  }
};
