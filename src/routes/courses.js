const express = require('express');
const courseController = require('../app/controllers/CourseController')
const router = express.Router();
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forcedestroy);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);
module.exports = router;
