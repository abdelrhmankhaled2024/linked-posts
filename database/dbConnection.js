import mysql from "mysql2";

export const dbConnection = () => {
  const conn = mysql.createConnection(
    "mysql://ut2oiu3yu2vsy7eh:PRKml8JjbG840IRT3jqG@bxq6mpfnn1eleztgfrtt-mysql.services.clever-cloud.com:3306/bxq6mpfnn1eleztgfrtt"
  );
  conn.connect((err) => {
    if (err) {
      console.log("database error:", err);
    } else {
      console.log("database Connected Succsefully.");
    }
  });
  return conn;
};
