import React from "react";

// Komponen ini menerima 'props' bernama 'deal' yang berisi objek data
export default function DealCard({ deal }) {
    return (
        // Class 'group' ini krusial untuk sinkronisasi efek hover anak-anaknya
        <div className="group cursor-pointer flex flex-col gap-4">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-shadow duration-300">
                {/* Efek zoom-in mulus saat di-hover */}
                <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Heart/Favorite Icon (Kanan Atas) */}
                <button className="absolute top-4 right-4 p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors duration-300">
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
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>

                {deal.badge && (
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm text-gray-800">
                        <span className="text-brand-orange">⏳</span>{" "}
                        {deal.badge}
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                    {deal.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1.5 font-medium">
                    {/* Icon Calendar mini */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                    </svg>
                    {deal.duration} • {deal.location}
                </p>
            </div>
        </div>
    );
}
