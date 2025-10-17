import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/recipes`;

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        request.get(baseUrl)
            .then(setRecipes)
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { recipes, loading, error };
};

export const useRecipe = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${recipeId}`)
            .then(setRecipe);
    }, [recipeId]);

    return { recipe };
};

export const useCreateRecipe = () => {
    const { request } = useAuth();

    const create = (recipeData) => request.post(baseUrl, recipeData);

    return {
        create,
    };
};

export const useEditRecipe = () => {
    const { request } = useAuth();

    const edit = (recipeId, recipeData) =>
        request.put(`${baseUrl}/${recipeId}`, { ...recipeData, _id: recipeId });

    return {
        edit,
    };
};

export const useDeleteRecipe = () => {
    const { request } = useAuth();

    const deleteRecipe = (recipeId) =>
        request.delete(`${baseUrl}/${recipeId}`);

    return {
        deleteRecipe,
    };
};



