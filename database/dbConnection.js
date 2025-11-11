import mysql from "mysql2";

export const dbConnection = () => {
  const conn = mysql.createConnection({
    host: "bxq6mpfnn1eleztgfrtt-mysql.services.clever-cloud.com",
    user: "ut2oiu3yu2vsy7eh",
    password: "PRKml8JjbG840IRT3jqG",
    database: "bxq6mpfnn1eleztgfrtt",
    port: 3306,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  conn.connect((err) => {
    if (err) {
      console.log("database error:", err);
    } else {
      console.log("Database Connected Successfully.");
    }
  });

  return conn;
};
