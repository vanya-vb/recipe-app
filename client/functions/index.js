import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import { defineSecret } from 'firebase-functions/params';
import Anthropic from "@anthropic-ai/sdk"

// Set global options for all functions
setGlobalOptions({ region: 'us-central1' });

const CLAUDE_ACCESS_TOKEN = defineSecret('CLAUDE_ACCESS_TOKEN');

export const generateRecipe = onCall({ secrets: [CLAUDE_ACCESS_TOKEN] }, async (request) => {
    console.log('Function started');
    console.log('Request data:', request.data);

    // Check if we have the environment variable
    const apiKey = CLAUDE_ACCESS_TOKEN.value();
    if (!apiKey) {
        console.error('CLAUDE_ACCESS_TOKEN is not set');
        throw new HttpsError('internal', 'API key not configured');
    }

    console.log('API key exists, length:', apiKey.length);

    const anthropic = new Anthropic({ apiKey });

    const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

    try {
        const ingredientsString = request.data.ingredients.join(", ");
        console.log('Making request with ingredients:', ingredientsString);

        const response = await anthropic.messages.create({
            model: "claude-3-haiku-20240307",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        });

        console.log('Response received successfully');
        return response.content[0].text;
    } catch (err) {
        console.error('Claude API Error:');
        console.error('Error type:', err.constructor.name);
        console.error('Error message:', err.message);
        console.error('Error code:', err.code);
        console.error('Error status:', err.status);

        throw new HttpsError('internal', `Claude API error: ${err.message}`);
    }
});