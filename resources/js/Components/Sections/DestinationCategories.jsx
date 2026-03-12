import React from "react";
import CategoryCard from "@/Components/UI/CategoryCard";

export default function DestinationCategories() {
    // Simulasi data kategori
    const categories = [
        {
            id: 1,
            title: "Beaches",
            count: 24,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Mountains",
            count: 18,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Cities",
            count: 32,
            image: "https://images.unsplash.com/photo-1477959858617-679af054b394?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Deserts",
            count: 9,
            image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 5,
            title: "Forests",
            count: 15,
            image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=500&auto=format&fit=crop",
        },
        {
            id: 6,
            title: "Islands",
            count: 12,
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=500&auto=format&fit=crop",
        },
    ];

    return (
        // Latar belakang diatur sedikit berbeda (bg-brand-light/bg-gray-50)
        // untuk membedakan batas section ini dengan Popular Deals secara visual
        <section className="py-20 px-8 max-w-7xl mx-auto border-t border-gray-100">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Destination Categories
                </h2>

                <div className="flex gap-2">
                    {/* Tombol panah minimalis */}
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Grid Responsif:
                Mobile: 2 kolom (grid-cols-2)
                Tablet: 3 kolom (md:grid-cols-3)
                Desktop: 6 kolom (lg:grid-cols-6)
            */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
}
