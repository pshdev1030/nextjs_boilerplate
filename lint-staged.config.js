module.exports = {
  "**.*,(ts|tsx)": () => "npm run tsc --noEmit",
  "**/*.(ts|tsx)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],
}
