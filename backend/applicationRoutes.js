const express = require('express');
const router = express.Router();
const applicationController = require('./applicationController');

// Create a new application
router.post('/', applicationController.createApplication);

// Get all applications
router.get('/', applicationController.getAllApplications);

// Get a specific application by ID
router.get('/:id', applicationController.getApplicationById);

// Update a specific application by ID
router.put('/:id', applicationController.updateApplication);

// Delete a specific application by ID
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;
