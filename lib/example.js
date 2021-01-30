"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const markdownMagic = require("markdown-magic");
const SUBPACKAGETABLE = require('./index');
const config = {
    transforms: {
        SUBPACKAGETABLE,
    },
};
const markdownPath = path.join(__dirname, '..', 'README.md');
markdownMagic(markdownPath, config);
//# sourceMappingURL=example.js.map