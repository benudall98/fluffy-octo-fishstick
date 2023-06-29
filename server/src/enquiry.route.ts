const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiry.controller');

router.post('/', enquiryController.submitEnquiry);

module.exports = router;