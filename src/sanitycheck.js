import jwt from "jsonwebtoken";

const secret = "mysecretkey";
const token = jwt.sign({ id: 1 }, secret, { expiresIn: "1h" });
console.log("token", token);
console.log("verify", jwt.verify(token, secret));
