import { urlencoded } from "body-parser";
import express from "express";
import { Buyer } from "../structures/accounts/Buyer";
import { Seller } from "../structures/accounts/Seller";
const app = express();
const urlencodedParser = urlencoded({ extended: false });
app.post("/signup", urlencodedParser, async (req, res) => {
  console.log({ body: req.body });
  let response;
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