const { model: Model, Schema } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = Model('Post', postSchema);
