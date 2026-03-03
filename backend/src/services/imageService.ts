import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

/**
 * Fetches a random image URL from a reliable provider.
 */
export const fetchRandomImage = async (query: string): Promise<string> => {
    const width = 800;
    const height = 600;
    return `https://loremflickr.com/${width}/${height}/${query}?lock=${Math.floor(Math.random() * 1000)}`;
};

/**
 * Generates an AI-like caption for the image based on the query.
 * Uses the high-performance Gemini 2.5 Flash model.
 */
export const generateCaption = async (query: string): Promise<string> => {
    if (!GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not defined in the environment variables');
    }

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{
                        text: `Write a short, poetic 10-word caption for a photo of a ${query}. Do not use quotes.`
                    }]
                }]
            }
        );

        // Extract the text from the Gemini response structure
        const caption = response.data.candidates[0].content.parts[0].text.trim();
        return caption;
    } catch (error: any) {
        console.error('Gemini API Error:', error.response?.data || error.message);

        // Graceful fallback to maintain UI stability
        return `A beautiful and evocative capture of a ${query} in its natural element.`;
    }
};
