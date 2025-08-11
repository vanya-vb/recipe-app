export default function CommentsDisplay() {
    return (
        <div className="w-full mx-auto p-6 bg-olivine/30 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 mb-4">
                Comments:
            </h2>
            <ul className="space-y-3">
                <li className="comment bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">user: hello</p>
                </li>
                <li className="comment bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">user: hello</p>
                </li>
                <li className="comment bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">user: hello</p>
                </li>
            </ul>
        </div>
    );
}