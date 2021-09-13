import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const upload = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({});
}

export default {upload}
