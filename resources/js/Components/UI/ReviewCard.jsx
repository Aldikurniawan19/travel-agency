import React from "react";

export default function ReviewCard({ review }) {
    return (
        // flex-col dan h-full memastikan tinggi kartu merata di dalam grid
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {/* Star Rating Area */}
            <div className="flex gap-1 mb-6 text-brand-orange">
                {/* Looping untuk me-render bintang sebanyak angka 'rating' */}
                {[...Array(review.rating)].map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ))}
            </div>

            {/* Review Content (flex-grow mendorong profil ke paling bawah) */}
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic">
                "{review.content}"
            </p>

            {/* User Profile Area */}
            <div className="flex items-center gap-4 mt-auto">
                <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">
                        {review.role}
                    </p>
                </div>
            </div>
        </div>
    );
}
