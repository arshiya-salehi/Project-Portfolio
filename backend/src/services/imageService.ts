import axios from 'axios';

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
 */
export const generateCaption = async (query: string): Promise<string> => {
    const captions: { [key: string]: string[] } = {
        dog: [
            "A loyal companion showing pure joy and affection.",
            "Man's best friend captured in a playful moment.",
            "Alert and intelligent, a dog keeps watch over its territory."
        ],
        cat: [
            "Elegant and mysterious, a feline observes its surroundings.",
            "Curiosity captured in the eyes of a graceful cat.",
            "A moment of quiet independence for a domestic feline."
        ],
        lion: [
            "The king of the jungle exuding power and majesty.",
            "A powerful predator surveying the vast savanna."
        ],
        panda: [
            "A gentle giant enjoying a peaceful moment with bamboo.",
            "One of nature's most beloved and rare treasures."
        ],
        pizza: [
            "Deliciously melted cheese and toppings on a perfectly baked crust.",
            "A mouth-watering slice of Italian culinary tradition."
        ],
        burger: [
            "A juicy masterpiece stacked with fresh ingredients.",
            "The ultimate comfort food, perfectly grilled and seasoned."
        ],
        sushi: [
            "Artfully prepared rolls of fresh fish and seasoned rice.",
            "A delicate balance of flavors in Japanese cuisine."
        ],
        cake: [
            "A sweet celebration captured in a single, decadent slice.",
            "Layers of flavor and artistic confectionery design."
        ],
        coffee: [
            "The aromatic start to a productive morning.",
            "A steaming cup of rich, dark roast perfection."
        ],
        flower: [
            "Nature's delicate artistry captured in full bloom.",
            "Vibrant petals and intricate details of a seasonal blossom."
        ],
        beach: [
            "Golden sands meeting the rhythmic pulse of the ocean.",
            "A peaceful escape to the sun-drenched coastline."
        ],
        mountain: [
            "Towering peaks reaching towards the heavens.",
            "The rugged grandeur of alpine landscapes."
        ],
        car: [
            "Sleek lines and engineering excellence on four wheels.",
            "The thrill of the open road captured in a modern machine."
        ]
    };

    const templates = captions[query] || [
        `A beautiful and detailed view of a ${query}.`,
        `Capturing the unique character and essence of this ${query}.`,
        `A high-quality visual study of ${query} in its natural element.`
    ];

    const randomCaption = templates[Math.floor(Math.random() * templates.length)];
    await new Promise(resolve => setTimeout(resolve, 500));
    return randomCaption;
};
