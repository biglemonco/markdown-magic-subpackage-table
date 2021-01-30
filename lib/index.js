"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const defaults = {
    dir: './packages',
    sortKey: 'name',
};
function sanitizeLicense(license) {
    return license ? license : 'UNLICENSED';
}
function renderPackages(pkg) {
    const { name, description, version, license, link } = pkg;
    return ['', `[${name}](${link})`, description, version, license, ''].join(' | ');
}
const sortBy = (key) => (a, b) => {
    if (a[key] < b[key]) {
        return -1;
    }
    else if (a[key] > b[key]) {
        return 1;
    }
    else {
        return 0;
    }
};
const SUBPACKAGETABLE = (_, _options = {}, config) => {
    const options = Object.assign({}, defaults, _options);
    const packagesDir = path.resolve(path.dirname(config.originalPath), options.dir);
    const packages = fs
        .readdirSync(packagesDir)
        .map((filename) => path.join(packagesDir, filename))
        .filter((filePath) => fs.statSync(filePath).isDirectory())
        .filter((dirPath) => fs.existsSync(path.join(dirPath, 'package.json')))
        .map((dirPath) => [
        path.relative(path.dirname(config.originalPath), dirPath),
        require(path.join(dirPath, 'package.json')),
    ])
        .map(([link, pkg]) => {
        return {
            name: pkg.name,
            link,
            description: pkg.description.trim(),
            version: pkg.version,
            license: sanitizeLicense(pkg.license),
        };
    })
        .sort(sortBy(options.sortKey))
        .map(renderPackages);
    const headers = [
        '| **Package** | **Description** | **Version** | **License** |',
        '| -------------- | --------------- | ----------- | ----------- |',
    ];
    return headers.concat(packages).join('\n');
};
module.exports = SUBPACKAGETABLE;
//# sourceMappingURL=index.js.map