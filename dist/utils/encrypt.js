import { randomBytes, createCipheriv, createDecipheriv } from "crypto";
import { algorithm } from "./constants";
export function encrypt(readData, securitykey) {
    const iv = randomBytes(16);
    const cipher = createCipheriv(algorithm, securitykey, iv);
    const encrypted = Buffer.concat([cipher.update(readData), cipher.final()]);
    return {
        iv: iv.toString("hex"),
        data: encrypted.toString("hex"),
    };
}
export function decrypt(hash, securitykey) {
    const decipher = createDecipheriv(algorithm, securitykey, Buffer.from(hash.iv, "hex"));
    const decrpyted = Buffer.concat([
        decipher.update(Buffer.from(hash.data, "hex")),
        decipher.final(),
    ]);
    return decrpyted.toString();
}
export function hashPassword(password, iv) {
    const cipher = createCipheriv(algorithm, password, iv);
    const encrypted = Buffer.concat([cipher.update(password), cipher.final()]);
    return encrypted.toString("hex");
}
//# sourceMappingURL=encrypt.js.map