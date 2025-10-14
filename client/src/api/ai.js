import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase.js';

export async function getRecipeFromChefClaude(ingredientsArr) {
    try {
        const generateRecipe = httpsCallable(functions, 'generateRecipe');
        const result = await generateRecipe({ ingredients: ingredientsArr });
        return result.data;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}