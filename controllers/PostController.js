const { Post } = require('../models');

class PostController {
  static async getPosts(req, res) {
    try {
      const posts = await Post.find({});
      res.json(posts);
    } catch (ex) {
      res.status(500).send('Un error ha ocurrido');
    }
  }
  
  static async getPost(req, res) {
    try {
      const { id: postId } = req.params;
      const post = await Post.findById(postId);
      res.json(post);
    } catch (ex) {
      res.status(500).send('Un error ha ocurrido');
    }
  }

  static async createPost(req, res) {
    try {
      const { title, content, publishDate, author } = req.body;
      const post = new Post({
        title,
        content,
        publishDate,
        author,
      });
      await post.save();
      res.json(post);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Un error ha ocurrido');
    }
  }

  static async updatePost(req, res) {
    try {
      const { id: postId } = req.params;
      const update = req.body;
      await Post.findByIdAndUpdate(postId, update);
      const updatedPost = await Post.findById(postId);
      res.json(updatedPost);
    } catch (ex) {
      res.status(500).send('Un error ha ocurrido');
    }
  }

  static async deletePost(req, res) {
    try {
      const { id: postId } = req.params;
      const deletedPost = await Post.findByIdAndDelete(postId);
      res.json(deletedPost);
    } catch (ex) {
      res.status(500).send('Un error ha ocurrido');
    }
  }
}

module.exports = PostController;