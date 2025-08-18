export default function CommentsDisplay({ comments }) {
    return (
        <div className="w-full mx-auto p-6 bg-olivine/30 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 mb-4">
                Comments:
            </h2>
            <ul className="space-y-3">
                {
                    comments.length > 0 ?
                        comments.map(comment => (
                            <li key={comment._id} className="bg-white p-4 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-600"><span className="font-semibold">{comment._ownerId}</span>: {comment.comment}</p>
                            </li>
                        ))
                        :
                        (<p className="italic text-sm">No comments yet.</p>)
                }
            </ul>
        </div>
    );
}