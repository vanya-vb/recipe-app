import { toast } from "react-toastify";

export default function CommentsCreate({ onCreate }) {

    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        if (!comment) {
            toast.error("Please enter a comment.");
            return;
        }

        onCreate(comment);
    };

    return (
        <div className="w-full mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Add new comment:
            </label>
            <form className="space-y-4" action={commentAction}>
                <textarea
                    name="comment"
                    placeholder="Comment...."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olivine/50 focus:border-olivine/50 resize-none"
                    rows="4"
                ></textarea>
                <button
                    className="self-end bg-olivine text-white px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer"
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
}