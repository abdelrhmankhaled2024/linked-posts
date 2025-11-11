import { dbConnection } from "../../database/dbConnection.js";

const connection = dbConnection();
const addPost = (req, res) => {
  connection.query(`insert into posts set ?`, req.body, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error adding post", error: err });
    }
    res.status(201).json({ message: "success", postId: results.insertId });
  });
};

const getAllPosts = (req, res) => {
  connection.execute(
    `select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id`,
    (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching posts", error: err });
      }
      res.status(200).json({ message: "success", data: data });
    }
  );
};

const getSinglePost = (req, res) => {
  connection.execute(
    `select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id where posts.id=${req.params.id}`,
    (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching posts", error: err });
      }
      res.status(200).json({ message: "success", data: data });
    }
  );
};

const getUserPosts = (req, res) => {
  connection.execute(
    `select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.user_id where users.id=${req.params.id}`,
    (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching posts", error: err });
      }
      res.status(200).json({ message: "success", data: data });
    }
  );
};

const updateUser = (req, res) => {
  connection.query(`update posts set ? where id = ?`, [
    req.body,
    req.params.id,
  ]);
  res.status(200).json({ message: "success" });
};

const deleteUser = (req, res) => {
  connection.execute(`delete from posts where id=${req.params.id}`);
  res.status(200).json({ message: "success" });
};

export {
  addPost,
  getAllPosts,
  getSinglePost,
  getUserPosts,
  updateUser,
  deleteUser,
};
