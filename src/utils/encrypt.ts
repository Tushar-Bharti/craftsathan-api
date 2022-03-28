import { randomBytes, createCipheriv, createDecipheriv } from "crypto";
import { HashData } from "../../node_modules/dbdjs.db/dist/typings/interface";
import { algorithm } from "./constants";

export function encrypt(readData: string, securitykey: string) {
  const iv = randomBytes(16);

  const cipher = createCipheriv(algorithm, securitykey, iv);

  const encrypted = Buffer.concat([cipher.update(readData), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    data: encrypted.toString("hex"),
  };
}

export function decrypt(hash: HashData, securitykey: string) {
  const decipher = createDecipheriv(
    algorithm,
    securitykey,
    Buffer.from(hash.iv, "hex"),
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.data, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
}
export function hashPassword(password: string, iv: string) {
  const cipher = createCipheriv(algorithm, password, iv);

  const encrypted = Buffer.concat([cipher.update(password), cipher.final()]);

  return encrypted.toString("hex");
}
