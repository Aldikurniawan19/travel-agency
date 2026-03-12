import React from "react";

export default function CtaSection() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            {/* Wrapper utama dengan warna hijau brand dan border radius besar */}
            <div className="bg-brand-green rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between relative">
                {/* Konten Teks (Kiri) */}
                <div className="p-12 md:p-16 md:w-1/2 z-10 text-white">
                    <p className="text-white/70 font-semibold tracking-widest uppercase text-sm mb-4">
                        Loved by Explorers Everywhere
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        Upgrade your <br />
                        <span className="text-brand-orange">Adventure</span>
                    </h2>

                    <button className="bg-brand-orange hover:bg-orange-600 text-white font-medium py-3.5 px-10 rounded-full transition duration-300 shadow-lg shadow-brand-orange/20">
                        Join the Club
                    </button>
                </div>

                {/* Konten Gambar (Kanan) */}
                <div className="w-full md:w-1/2 h-64 md:h-full min-h-[400px] relative">
                    <img
                        src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=800&auto=format&fit=crop"
                        alt="Couple with dog looking at sunset"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Gradient overlay agar transisi antara warna hijau solid dan gambar terlihat lebih menyatu */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-green via-brand-green/40 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
