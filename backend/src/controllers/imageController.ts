import { Request, Response } from 'express';
import { fetchRandomImage, generateCaption } from '../services/imageService';

export const generateImageAndCaption = async (req: Request, res: Response) => {
    try {
        // 1. Pick a random query from a predefined list as per PID.md
        const queries = [
            'dog', 'cat', 'lion', 'panda', 'elephant', 'tiger',
            'pizza', 'burger', 'sushi', 'cake', 'coffee', 'pasta',
            'flower', 'tree', 'beach', 'mountain', 'car'
        ];
        const randomQuery = queries[Math.floor(Math.random() * queries.length)];

        // 2. Fetch random image (using Pexels/Unsplash logic in service)
        const imageUrl = await fetchRandomImage(randomQuery);

        // 3. Generate caption using AI (Mocking for now or using a free API)
        const caption = await generateCaption(randomQuery);

        res.status(200).json({
            imageUrl,
            caption,
            query: randomQuery
        });
    } catch (error: any) {
        console.error('Error generating image/caption:', error.message);
        res.status(500).json({ error: 'Failed to generate content' });
    }
};
