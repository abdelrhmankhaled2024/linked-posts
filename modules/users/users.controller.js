import { dbConnection } from "../../database/dbConnection.js";
import bcrypt from "bcrypt";

const connection = dbConnection();

const signup = (req, res) => {
  connection.query(`insert into users set ?`, req.body);
  res.status(201).json({ messege: "User Added Successfully." });
};

const signin = (req, res) => {
  res.json({
    message: "Login successful",
    token: "your-token-here",
    userId: req.user.id,
  });
};
export { signup, signin };
