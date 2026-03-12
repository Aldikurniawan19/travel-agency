import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Grid Atas: Brand Info & Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Kolom 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-2xl font-bold tracking-wide text-brand-green mb-6">
                            <span className="text-brand-orange">▲</span> Godee
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your trusted travel partner. We make exploring the
                            world's most beautiful destinations easy,
                            accessible, and unforgettable.
                        </p>
                    </div>

                    {/* Kolom 2: Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Travel Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">
                            Support
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Safety Information
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Cancellation Options
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Legal */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-brand-orange transition-colors"
                                >
                                    Cookie Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Garis Bawah & Hak Cipta */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Godee Travel Agency.
                        All rights reserved.
                    </p>

                    {/* Social Media placeholders */}
                    <div className="flex gap-4 text-gray-400">
                        <span className="hover:text-brand-orange cursor-pointer transition-colors">
                            IG
                        </span>
                        <span className="hover:text-brand-orange cursor-pointer transition-colors">
                            TW
                        </span>
                        <span className="hover:text-brand-orange cursor-pointer transition-colors">
                            FB
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
