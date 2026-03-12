import React from "react";
import { Link, usePage } from "@inertiajs/react"; // Tambahkan usePage

export default function Navbar() {
    // Mengambil data user dari global props Inertia
    const { auth } = usePage().props;

    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-2 text-xl font-bold tracking-wide">
                <span className="text-brand-orange">▲</span> Godee
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link
                    href="#"
                    className="hover:text-brand-orange transition duration-300"
                >
                    Product
                </Link>
                <Link
                    href="#"
                    className="hover:text-brand-orange transition duration-300"
                >
                    Solutions
                </Link>
                <Link
                    href="#"
                    className="hover:text-brand-orange transition duration-300"
                >
                    Shop
                </Link>
                <Link
                    href="#"
                    className="hover:text-brand-orange transition duration-300"
                >
                    Popular places
                </Link>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium">
                <button className="flex items-center gap-1 hover:text-brand-orange transition duration-300">
                    <span role="img" aria-label="UK Flag">
                        🇬🇧
                    </span>
                    <span>EN</span>
                </button>

                {/* LOGIKA CONDITIONAL RENDERING */}
                {auth.user ? (
                    // Jika sudah login
                    <Link
                        href={route("dashboard")}
                        className="hover:text-brand-orange transition duration-300 border border-white px-4 py-2 rounded-full"
                    >
                        Dashboard ({auth.user.name})
                    </Link>
                ) : (
                    // Jika belum login
                    <Link
                        href={route("login")}
                        className="hover:text-brand-orange transition duration-300"
                    >
                        Log in
                    </Link>
                )}
            </div>
        </nav>
    );
}
