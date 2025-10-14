import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe({ recipe }) {
    return (
        <article className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md space-y-8 text-gray-800 mt-8">
            <h2 className="font-bold text-2xl mb-4">Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </article>
    );
};

