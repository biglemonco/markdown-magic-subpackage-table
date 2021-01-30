# Markdown Magic Subpackage Table

Add a table of subpackages to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
yarn add --dev markdown-magic markdown-magic-subpackage-table
```

## Adding the plugin

See `src/example.ts` for usage, or use it in your markdown.config.js file for CLI usage.

```
module.exports = {
  transforms: {
		SUBPACKAGETABLE: require('markdown-magic-subpackage-table'),
  },
}
```

## Usage in markdown

This is generated using this plugin `src/example.ts`:

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGETABLE) -->
| **Package** | **Description** | **Version** | **License** |
| -------------- | --------------- | ----------- | ----------- |
 | [example](packages/dummy-package) | Example subpackage to test this package | 1.1.1 | MIT | 
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

- dir (./packages) - packages directory path
- sortKey ('name') - sort key to sort by, can be: `name`, `link`, `description`, `version` or `license`.
