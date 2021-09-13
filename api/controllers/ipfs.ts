import { Request, Response, NextFunction } from 'express';
import { NFTStorage, Blob } from 'nft.storage';

const upload = async (req: Request, res: Response, next: NextFunction) => {
  const apiKey = process.env.NFT_STORAGE_KEY || '';
  const client = new NFTStorage({ token: apiKey });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const content = new Blob([req.file?.buffer], { type: req.file?.mimetype });
  const metadata = await client.storeBlob(content);
  return res.status(200).json({ hash: metadata });
};


export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'John Doe' });
}
