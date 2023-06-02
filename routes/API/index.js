const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/Thought', thoughtRoutes);
router.use('/User', userRoutes);

module.exports = router;