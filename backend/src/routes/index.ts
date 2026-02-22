import { Router } from 'express';
import { generateImageAndCaption } from '../controllers/imageController';

const router = Router();

// Endpoint for Random Image + AI Caption
router.get('/generate', generateImageAndCaption);

export default router;
