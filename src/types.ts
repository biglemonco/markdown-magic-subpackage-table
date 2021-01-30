export type Options = {
  dir: string;
  sortKey: keyof PackageList;
};

export type Config = {
  originalPath: string;
};

export type PackageList = {
  name: string;
  link: string;
  description: string;
  version: string;
  license: string;
};
