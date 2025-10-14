import { useParams, Link, useNavigate } from "react-router";
import { useDeleteRecipe, useRecipe } from "../../api/recipeApi";
import useAuth from "../../hooks/useAuth";
import CommentsDisplay from "../CommentsDisplay/CommentsDisplay";
import CommentsCreate from "../CommentsCreate/CommentsCreate";
import { useComments, useCreateComment } from "../../api/commentsApi";
import { toast } from "react-toastify";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function RecipeDetails() {
    const navigate = useNavigate();
    const { email, userId } = useAuth();
    const { recipeId } = useParams();
    const { recipe } = useRecipe(recipeId);
    const { deleteRecipe } = useDeleteRecipe();
    const { comments, setComments } = useComments(recipeId);
    const { create } = useCreateComment();

    // delete handler
    const recipeDeleteClickHandler = async () => {
        const hasConfirm = confirm(
            `Are you sure you want to delete ${recipe.title} recipe?`
        );

        if (!hasConfirm) {
            return;
        }

        await deleteRecipe(recipeId);
        toast.success('The recipe has been deleted successfully');
        navigate('/recipes');
    };

    const commentCreateHandler = async (comment) => {
        try {
            let newComment = await create(recipeId, comment);

            newComment = {
                ...newComment,
                author: {
                    email,
                },
            };

            setComments((state) => [...state, newComment]);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const isOwner = userId === recipe._ownerId;

    return (
        <section className="h-screen w-screen px-6 pb-22 pt-30 lg:px-8 bg-[url('https://images.unsplash.com/photo-1690983321732-07d28c8ade36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 backdrop-blur-xs bg-black/30 px-6 pt-30 pb-22 overflow-y-auto">
                <article className="max-w-2xl mx-auto p-8 pt-4 bg-white rounded-lg shadow-md space-y-8 text-gray-800">
                    <Link to="/recipes" className="text-sm font-semibold text-gray-800"><FaLongArrowAltLeft className="inline mr-2" />Back to recipes</Link>
                    <div className="overflow-hidden rounded-lg mt-2">
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-full object-cover max-h-100"
                        />
                    </div>

                    {/* Header Section */}
                    <header>
                        <h1 className="text-3xl font-bold mb-4 capitalize">
                            {recipe.title}
                        </h1>

                        <div className="mt-6 bg-olivine/20 p-4 rounded-md border-l-4 border-green-hunter">
                            <h2 className="text-xl font-semibold mb-2 underline">
                                Ingredients:
                            </h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {recipe.ingredients?.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </header>

                    {/* Main Section */}
                    <div className="space-y-8">
                        <hr className="border-gray-200" />

                        {/* Instructions */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2 underline">
                                Instructions:
                            </h2>
                            <ul className="list-decimal list-inside space-y-3 text-gray-700">
                                {recipe.instructions?.map((instruction, i) => (
                                    <li key={i}>{instruction + "."}</li>
                                ))}
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
            </div>
        </section>
    );
}
