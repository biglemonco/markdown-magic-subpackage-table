import * as fs from 'fs';
import * as path from 'path';

import { Options, Config, PackageList } from './types';

const defaults: Options = {
  dir: './packages',
  sortKey: 'name',
};

function sanitizeLicense(license) {
  return license ? license : 'UNLICENSED';
}

function renderPackages(pkg: PackageList) {
  const { name, description, version, license, link } = pkg;
  return ['', `[${name}](${link})`, description, version, license, ''].join(
    ' | '
  );
}

const sortBy = (key: Options['sortKey']) => (
  a: PackageList,
  b: PackageList
) => {
  if (a[key] < b[key]) {
    return -1;
  } else if (a[key] > b[key]) {
    return 1;
  } else {
    return 0;
  }
};

const SUBPACKAGETABLE = (
  _: any,
  _options: Partial<Options> = {},
  config: Config
) => {
  const options: Options = Object.assign({}, defaults, _options);

  const packagesDir = path.resolve(
    path.dirname(config.originalPath),
    options.dir
  );

  const packages = fs
    .readdirSync(packagesDir)
    .map((filename) => path.join(packagesDir, filename))
    .filter((filePath) => fs.statSync(filePath).isDirectory())
    .filter((dirPath) => fs.existsSync(path.join(dirPath, 'package.json')))
    .map((dirPath) => [
      path.relative(path.dirname(config.originalPath), dirPath),
      require(path.join(dirPath, 'package.json')),
    ])
    .map(
      ([link, pkg]: [string, any]): PackageList => {
        return {
          name: pkg.name,
          link,
          description: pkg.description.trim(),
          version: pkg.version,
          license: sanitizeLicense(pkg.license),
        };
      }
    )
    .sort(sortBy(options.sortKey))
    .map(renderPackages);

  const headers = [
    '| **Package** | **Description** | **Version** | **License** |',
    '| -------------- | --------------- | ----------- | ----------- |',
  ];

  return headers.concat(packages).join('\n');
};

module.exports = SUBPACKAGETABLE;
