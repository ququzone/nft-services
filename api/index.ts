import express, { Express } from 'express';
import multer from 'multer';
import morgan from 'morgan';
import ipfs from './controllers/ipfs';

const app: Express = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

app.get('/api', async (req, res) => {
  res.status(200).send('Hello, NFT!');
});
app.post('/api/ipfs/upload', upload.single('file'), ipfs.upload);

app.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message,
  });
});

export default app;
