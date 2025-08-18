import { useParams, Link, useNavigate } from "react-router"
import { useDeleteRecipe, useRecipe } from "../../api/recipeApi";
import useAuth from "../../hooks/useAuth";
import CommentsDisplay from "../CommentsDisplay/CommentsDisplay";
import CommentsCreate from "../CommentsCreate/CommentsCreate";
import { useComments, useCreateComment } from "../../api/commentsApi";

export default function RecipeDetails() {
    const navigate = useNavigate();
    const { email, _id: userId } = useAuth();
    const { recipeId } = useParams();
    const { recipe } = useRecipe(recipeId);
    const { deleteRecipe } = useDeleteRecipe();
    const { comments, setComments } = useComments(recipeId);
    const { create } = useCreateComment();

    // delete handler
    const recipeDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title} recipe?`);

        if (!hasConfirm) {
            return;
        }

        await deleteRecipe(recipeId);

        navigate('/recipes');
    };

    const commentCreateHandler = async (comment) => {
        let newComment = await create(recipeId, comment);
        newComment = {
            ...newComment,
            author: {
                email,
            },
        }

        setComments(state => [...state, newComment]);
    };

    const isOwner = userId === recipe._ownerId;

    return (
        <article className="max-w-2xl mx-auto my-30 p-8 pb-15 bg-white rounded-lg shadow-md space-y-8 text-gray-800">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full object-cover"
                />
            </div>

            {/* Header Section */}
            <header>
                <h1 className="text-3xl font-bold mb-4 capitalize">{recipe.title}</h1>

                <div className="mt-6 bg-olivine/20 p-4 rounded-md border-l-4 border-green-hunter">
                    <h2 className="text-xl font-semibold mb-2 underline">Ingredients:</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {recipe.ingredients?.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                    </ul>
                </div>
            </header>

            {/* Main Section */}
            <div className="space-y-8">

                <hr className="border-gray-200" />

                {/* Instructions */}
                <div>
                    <h2 className="text-xl font-semibold mb-2 underline">Instructions:</h2>
                    <ul className="list-decimal list-inside space-y-3 text-gray-700">
                        {recipe.instructions?.map((instruction, i) => <li key={i}>{instruction}</li>)}
                    </ul>
                </div>

            </div>

            {isOwner && (
                <div className="flex gap-2 justify-end">
                    <Link
                        to={`/recipes/${recipeId}/edit`}
                        className="self-end bg-olivine text-white px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={recipeDeleteClickHandler}
                        className="self-end bg-olivine text-white px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            )}

            <hr className="border-gray-200" />

            <CommentsDisplay comments={comments} />

            <CommentsCreate
                email={email}
                recipeId={recipeId}
                onCreate={commentCreateHandler}
            />
        </article>
    )
}