module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["airbnb-base", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"no-underscore-dangle": ["error", { allow: ["_id"] }],
		"no-console": ["error", { allow: ["warn", "error"] }],
	},
}
