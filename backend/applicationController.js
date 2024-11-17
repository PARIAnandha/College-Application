const Application = require('./applicationModel');

// Create a new application
exports.createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).json({ message: 'Application created successfully', data: savedApplication });
  } catch (error) {
    res.status(400).json({ message: 'Error creating application', error: error.message });
  }
};

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving applications', error: error.message });
  }
};

// Get a single application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ data: application });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving application', error: error.message });
  }
};

// Update an application by ID
exports.updateApplication = async (req, res) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application updated successfully', data: updatedApplication });
  } catch (error) {
    res.status(400).json({ message: 'Error updating application', error: error.message });
  }
};

// Delete an application by ID
exports.deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await Application.findByIdAndDelete(req.params.id);
    if (!deletedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application deleted successfully', data: deletedApplication });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting application', error: error.message });
  }
};
