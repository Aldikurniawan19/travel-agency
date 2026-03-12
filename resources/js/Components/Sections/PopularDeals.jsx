import React from "react";
import DealCard from "@/Components/UI/DealCard";

export default function PopularDeals() {
    const dealsData = [
        {
            id: 1,
            title: "Maldives Luxurious Spa Retreat: Unwind in Style",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop",
            duration: "3 days",
            location: "Ari Atoll, Maldives",
            badge: "23:04:09 left",
        },
        {
            id: 2,
            title: "Swiss Alps Adventure: Snow & Cozy Cabins",
            image: "https://images.unsplash.com/photo-1531366936337-7785a0ce5660?q=80&w=800&auto=format&fit=crop",
            duration: "5 days",
            location: "Zermatt, Switzerland",
            badge: "10:22:15 left",
        },
        {
            id: 3,
            title: "Mongolia: Unleash the Spirit of Adventure",
            image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800&auto=format&fit=crop",
            duration: "7 days",
            location: "Gobi Desert, Mongolia",
            badge: "45:10:00 left",
        },
        {
            id: 4,
            title: "Bali's Hidden Gems: The Unforgettable Escape",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
            duration: "4 days",
            location: "Ubud, Indonesia",
            badge: "05:12:30 left",
        },
    ];

    return (
        <section className="py-24 px-8 max-w-7xl mx-auto bg-white">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    Popular Deals
                </h2>

                <div className="flex gap-3">
                    <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:border-brand-green hover:text-brand-green transition-all">
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
                    <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:border-brand-green hover:text-brand-green transition-all">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {dealsData.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                ))}
            </div>
        </section>
    );
}
