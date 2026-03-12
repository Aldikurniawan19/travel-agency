import React from "react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-start px-8 md:px-24">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    // Ganti URL ini dengan path lokal Anda nanti, misal: 'url(/images/hero-bg.webp)'
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-2xl text-white">
                <p className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">
                    Your Trusted Travel Partner
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Discover a World <br />
                    of Possibilities <br />
                    with Godee
                </h1>

                <p className="text-gray-300 text-lg mb-10 max-w-md">
                    Discover a world of possibilities with Godee. Embark on your
                    dream journey with our curated travel experiences.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <button className="bg-brand-orange hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center gap-2">
                        Find a Destination
                        <span>→</span>
                    </button>

                    <button className="border border-white hover:bg-white hover:text-brand-green text-white font-medium py-3 px-8 rounded-full transition duration-300">
                        Get the app
                    </button>
                </div>
            </div>
        </section>
    );
}
