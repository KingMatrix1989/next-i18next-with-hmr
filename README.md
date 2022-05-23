# next-i18next-with-hmr

A sample repo related to issue:
https://github.com/felixmosh/i18next-hmr/issues/109

Check it:
- **footer.json** updates don't apply to client-side.
- **But** Update of **common.json**, affecting client-side as well.


It seems Client-HMR only works in case that all namespaces declared in next-i18next-config, because the plugin check for `i18n.options.ns` by default.
