const express = require('express');
const router = express.Router();
const caseController = require('../controllers/caseController');

// Handle case submission
router.post('/', caseController.createCase);

// Retrieve all cases (for admin view)
router.get('/', caseController.getCases);

// Retrieve today's follow-up list
router.get('/followups/today', caseController.getTodayFollowUps);

// Delete a case by its ID
router.delete('/:id', caseController.deleteCase);

module.exports = router;
