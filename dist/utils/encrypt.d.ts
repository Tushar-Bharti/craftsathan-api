import { HashData } from "../../node_modules/dbdjs.db/dist/typings/interface";
export declare function encrypt(readData: string, securitykey: string): {
    iv: string;
    data: string;
};
export declare function decrypt(hash: HashData, securitykey: string): string;
export declare function hashPassword(password: string, iv: string): string;
//# sourceMappingURL=encrypt.d.ts.map