import { NFTStorage, Blob } from 'nft.storage';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const upload = async (req, res) => {
  const apiKey = process.env.NFT_STORAGE_KEY || '';
  const client = new NFTStorage({ token: apiKey });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const content = new Blob([req.file?.buffer], { type: req.file?.mimetype });
  const metadata = await client.storeBlob(content);
  return res.status(200).json({ hash: metadata });
};

export default { upload };
