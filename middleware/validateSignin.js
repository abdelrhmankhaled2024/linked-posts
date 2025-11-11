import { dbConnection } from "../database/dbConnection.js";
import bcrypt from "bcrypt";

const connection = dbConnection();

export const validateSignin = (req, res, next) => {
  connection.execute(
    `select id,email,password from users where email='${req.body.email}'`,
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }

      if (data.length === 0) {
        return res.status(401).json({ message: "Account Not Found" });
      }

      const match = bcrypt.compareSync(req.body.password, data[0].password);
      if (!match) {
        return res.status(401).json({ message: "Password incorrect" });
      }

      req.user = {
        id: data[0].id,
        email: data[0].email,
      };

      next();
    }
  );
};
