import pool from "../../database/dbConnection.js";

// Add a post
const addPost = async (req, res) => {
  try {
    const [result] = await pool.query(`INSERT INTO posts SET ?`, req.body);
    res.status(201).json({ message: "success", postId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Error adding post", error: err });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT users.id, users.name, posts.id AS postId, posts.title, posts.description
      FROM users JOIN posts ON users.id = posts.user_id
    `);
    res.status(200).json({ message: "success", data: rows });
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
};

// Get single post by post ID
const getSinglePost = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT users.id, users.name, posts.id AS postId, posts.title, posts.description
      FROM users JOIN posts ON users.id = posts.user_id
      WHERE posts.id = ?
    `,
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "success", data: rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err });
  }
};

// Get all posts by a specific user
const getUserPosts = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT users.id, users.name, posts.id AS postId, posts.title, posts.description
      FROM users JOIN posts ON users.id = posts.user_id
      WHERE users.id = ?
    `,
      [req.params.id]
    );
    res.status(200).json({ message: "success", data: rows });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user posts", error: err });
  }
};

// Update a post
const updateUser = async (req, res) => {
  try {
    const [result] = await pool.query(`UPDATE posts SET ? WHERE id = ?`, [
      req.body,
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "Error updating post", error: err });
  }
};

// Delete a post
const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query(`DELETE FROM posts WHERE id = ?`, [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post", error: err });
  }
};

export {
  addPost,
  getAllPosts,
  getSinglePost,
  getUserPosts,
  updateUser,
  deleteUser,
};
