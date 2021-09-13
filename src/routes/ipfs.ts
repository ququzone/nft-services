import express from 'express';
import controller from '../controllers/ipfs';
const router = express.Router();

router.get('/upload', controller.upload);

export = router;
