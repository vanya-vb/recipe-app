import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/recipes';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const recipes = Object.values(result);

        return recipes;
    },

    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`)
    },

    create(recipeData) {
        return request.post(baseUrl, recipeData);
    },

    delete(gameId) {
        return request.delete(`${baseUrl}/${gameId}`)
    },
};