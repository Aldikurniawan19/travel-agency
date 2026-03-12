import React from "react";

export default function CategoryCard({ category }) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3 rounded-xl hover:bg-gray-50 p-2 transition-colors duration-300">
            {/* Image Container dengan rasio aspek tetap */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Typography */}
            <div className="px-1">
                <h3 className="text-md font-bold text-gray-900 group-hover:text-brand-orange transition-colors duration-300">
                    {category.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                    {category.count} Destinations
                </p>
            </div>
        </div>
    );
}
