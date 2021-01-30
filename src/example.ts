import * as path from 'path';
import * as markdownMagic from 'markdown-magic';

const SUBPACKAGETABLE = require('./index');

const config = {
  transforms: {
    SUBPACKAGETABLE,
  },
};

const markdownPath = path.join(__dirname, '..', 'README.md');
markdownMagic(markdownPath, config);
