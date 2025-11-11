import mysql from "mysql2";

const pool = mysql.createPool({
  host: "bxq6mpfnn1eleztgfrtt-mysql.services.clever-cloud.com",
  user: "ut2oiu3yu2vsy7eh",
  password: "PRKml8JjbG840IRT3jqG",
  database: "bxq6mpfnn1eleztgfrtt",
  port: 3306,
  connectionLimit: 5, // max 5 open connections
});

export default pool.promise();
