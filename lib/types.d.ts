export declare type Options = {
    dir: string;
    sortKey: keyof PackageList;
};
export declare type Config = {
    originalPath: string;
};
export declare type PackageList = {
    name: string;
    link: string;
    description: string;
    version: string;
    license: string;
};
