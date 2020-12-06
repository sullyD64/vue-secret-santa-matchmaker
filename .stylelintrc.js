module.exports = {
  root: true,
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "declaration-block-trailing-semicolon": null
  }
}
