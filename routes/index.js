const express = require('express');
const { PostController }  = require('../controllers');

const router = express.Router();

router.get('/', PostController.getPosts);
router.get('/:id', PostController.getPost);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

module.exports = router;