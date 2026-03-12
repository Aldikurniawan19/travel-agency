import React from "react";
import Navbar from "@/Components/Navigation/Navbar";
import Footer from "@/Components/Navigation/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 antialiased relative">
            {/* Navbar disuntikkan di sini agar muncul di setiap halaman yang menggunakan layout ini */}
            <Navbar />

            {/* Konten spesifik halaman (seperti Hero, Popular Deals) masuk ke sini */}
            <main>
                {/* Konten spesifik halaman (seperti Hero, Popular Deals) masuk ke sini */}
                {children}
            </main>

            <Footer />
        </div>
    );
}
