import express from 'express';
import controller from '../controllers/ipfs';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post('/ipfs/upload', upload.single('file'), controller.upload);

export = router;
