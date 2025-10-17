export default function Pagination({ totalPages, page, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, idx) => (
                <button key={idx + 1}
                    className={`px-3 py-1 cursor-pointer rounded 
                    ${page === idx + 1 ? 'bg-olivine text-night' : 'border border-olivine text-olivine'}`}
                    onClick={() => onPageChange(idx + 1)}
                >
                    {idx + 1}
                </button>
            ))}
        </div>
    );
};