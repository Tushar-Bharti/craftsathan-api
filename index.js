import pkg from "body-parser";
const { urlencoded, json, raw } = pkg;
import express from "express";
import { Buyer } from "./dist/structures/accounts/Buyer.js";
import { Seller } from "./dist/structures/accounts/Seller.js";
import { KeyValue } from "dbdjs.db";
import { readFile } from "fs/promises";
import { readFileSync } from "fs";
import { encrypt, decrypt, hashPassword } from "./dist/utils/encrypt.js";
import constants from "./dist/utils/constants.js";
import Undici, { FormData, request } from "undici";

const db = new KeyValue({
  path: "./database",
  tables: ["accounts", "items", "transactions", "transaction_logs"],
  extension: ".sql",
  encryptOption: {
    enabled: true,
    securitykey: "craft-sathan-back-end",
  },
});

const app = express();
const urlencodedParser = urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(json());
app.use(raw());
app.get("/index.html", (req, res) => {
  res.send(`
<form action="/signup" method="POST" id="form">

    <label for="">
        <p> First Name:</p> <input type="text" name="name" class="input" required>
    </label>
    <!-- First Name: <input type="text" name="name" required> <br> -->
    <br>
    <label for="">
        <p>AccountType:</p> <input type="text" name="type" class="input" required>
    </label>
    <!-- AccountType: <input type="text" name="type" required> <br> -->
    <br>
    <label for=""></label>
    <p> Email: </p><input type="email" name="email" class="input" required> <br>

    <p> Password:</p> <input type="password" name="password" class="input" required> <br>
    <!-- -------- -->
    <p> Phone: </p><input type="number" name="phoneNumber" class="input" required> <br>
    <br>
    <input type="hidden" name="_method" value="POST">
    <input type="submit" value="Submit" class="input" id="submit">
    </div>
</form>`);
});
app.post("/signup", async (req, res) => {
  console.log({ body: req.body });
  let response;
  if (req.body["type"] === "buyer") {
    response = new Buyer(req.body);
  } else {
    response = new Seller(req.body);
  }
  const encrypted = hashPassword(
    response.password,
    constants.passwordConverterIv,
  );
  const encryptData = encrypt(JSON.stringify(response), encrypted);
  // Prepare output in JSON format
  console.log({ e });
  db.set("accounts", encrypted, response);
  res.end(JSON.stringify(response));
});
app.post("/login", async (req, res) => {
  console.log({ body: req.body });
  let response;
  db.tables.get("main");
  if (req.body["type"] === "buyer") {
    response = new Buyer(req.body);
  } else {
    response = new Seller(req.body);
  }
  // Prepare output in JSON format
  console.log(response);
  res.end(JSON.stringify(response));
});
app.listen(3000, () => {
  console.log("Your app is listening on port 3000");
});
export default app;
//# sourceMappingURL=i

const form = new FormData();

form.append("name", "sahan");
form.append("type", "buyer");
form.append("email", "mk");
form.append("password", "mk");
form.append("phone", "mk");

const obj = {
  name: "sahan",
  type: "seller",
  email: "mk",
  password: "mk",
  phone: "mk",
};

request("http://127.0.0.1:3000/signup", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(obj),
}).then(async (d) => console.log(await d.body.text()));
