import React from "react";

export default function PromoBlock() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            {/* Grid Utama: 1 kolom di mobile, 2 kolom di desktop dengan jarak antar kolom yang lebar (gap-16) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* KOLOM KIRI: Image Collage (Grid Sekunder) */}
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                    {/* Gambar Kiri (Tinggi penuh, memakan 2 baris) */}
                    <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
                            alt="Traveler exploring"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Gambar Kanan Atas */}
                    <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop"
                            alt="Coffee on a mountain"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Gambar Kanan Bawah */}
                    <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop"
                            alt="Boat on a lake"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* KOLOM KANAN: Typography & Call to Action */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Embark on Your <br />
                        <span className="text-brand-orange">
                            Dream Journey
                        </span>{" "}
                        with <br />
                        Our Travel Agency
                    </h2>

                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        Discover a world of possibilities with Godee. Embark on
                        your dream journey with our curated travel experiences.
                        We provide personalized itineraries, seamless bookings,
                        and 24/7 support to ensure your adventure is
                        unforgettable.
                    </p>

                    {/* Stats/Features (Opsional, untuk menambah depth desain) */}
                    <div className="flex gap-8 mb-10 border-l-4 border-brand-green pl-6">
                        <div>
                            <p className="text-3xl font-bold text-gray-900">
                                15<span className="text-brand-orange">+</span>
                            </p>
                            <p className="text-sm text-gray-500 font-medium">
                                Years Experience
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">
                                10k<span className="text-brand-orange">+</span>
                            </p>
                            <p className="text-sm text-gray-500 font-medium">
                                Happy Travelers
                            </p>
                        </div>
                    </div>

                    <div>
                        <button className="bg-brand-orange hover:bg-orange-600 text-white font-medium py-3.5 px-8 rounded-full transition duration-300 shadow-md shadow-brand-orange/30">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
