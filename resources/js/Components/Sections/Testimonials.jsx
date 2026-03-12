import React from "react";
import ReviewCard from "@/Components/UI/ReviewCard";

export default function Testimonials() {
    // Simulasi data ulasan (Bisa diubah jadi dinamis via API nanti)
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Solo Traveler",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            content:
                "Godee made my trip to the Maldives absolutely perfect. The resort recommendation was spot on, and the seamless booking process took all the stress away.",
        },
        {
            id: 2,
            name: "David Chen",
            role: "Travel Blogger",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
            content:
                "As someone who travels for a living, I appreciate efficiency. Godee's app is incredibly intuitive, and their customer support is unparalleled in the industry.",
        },
        {
            id: 3,
            name: "Emma Watson",
            role: "Weekend Adventurer",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
            content:
                "I found a last-minute deal to the Swiss Alps that I couldn't resist. Everything from the flights to the cozy cabin was organized flawlessly. Highly recommend!",
        },
    ];

    return (
        // Menggunakan bg-gray-50 agar ada kontras sedikit dengan section promo sebelumnya yang putih
        <section className="py-24 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Traveler's shared their experiences
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Don't just take our word for it. See what our community
                        of explorers has to say about their journeys with Godee.
                    </p>
                </div>

                {/* Grid Container untuk Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
