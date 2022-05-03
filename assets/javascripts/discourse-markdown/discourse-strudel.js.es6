export function setup(helper) {
  if (!helper.markdownIt) { return; }
  helper.registerOptions((opts, siteSettings) => {
    opts.features.strudel = siteSettings.discourse_strudel_enabled;
  });

  helper.whiteList(["strudel-repl"]);

  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("strudel",{
      tag: "strudel",

      replace: function(state, tagInfo, content) {
        const token = state.push("html_raw", '', 0);
        const escaped = state.md.utils.escapeHtml(content);
        token.content = `<strudel-repl>\n${escaped}\n</strudel-repl>\n`;
        return true;
      }
    });
  });
}
