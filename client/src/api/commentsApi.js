import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/comments`;

export const useComments = (recipeId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `recipeId="${recipeId}"`,
            load: `author=_ownerId:users`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments);
    }, [recipeId, request]);

    return {
        comments,
        setComments,
    }
};

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (recipeId, comment) => {
        const commentData = {
            recipeId,
            comment,
        };

        return request.post(baseUrl, commentData);
    }

    return {
        create,
    }
}