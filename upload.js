// backend/routes/upload.js
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const upload = multer({ storage: multer.memoryStorage() });
const s3 = new AWS.S3();
const router = express.Router();

// Upload Video
router.post('/', upload.single('video'), async (req, res) => {
  const params = {
    Bucket: 'your-bucket-name',
    Key: `videos/${req.file.originalname}`,
    Body: req.file.buffer,
    ACL: 'public-read'
  };

  try {
    const data = await s3.upload(params).promise();
    res.json({ videoUrl: data.Location });
  } catch (error) {
    res.status(500).send('Error uploading video');
  }
});

module.exports = router;
