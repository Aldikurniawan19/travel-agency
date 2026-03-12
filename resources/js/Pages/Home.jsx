import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Hero from "@/Components/Sections/Hero";
import PartnerLogos from "@/Components/Sections/PartnerLogos";
import PopularDeals from "@/Components/Sections/PopularDeals";
import DestinationCategories from "@/Components/Sections/DestinationCategories";
import PromoBlock from "@/Components/Sections/PromoBlock";
import Testimonials from "@/Components/Sections/Testimonials";
import CtaSection from "@/Components/Sections/CtaSection";

export default function Home() {
    return (
        <MainLayout>
            {/* Mengatur Meta Title untuk SEO */}
            <Head title="Godee - Discover a World of Possibilities" />

            {/* Merender Hero Section */}
            <Hero />

            {/* Section lainnya akan kita letakkan di bawah sini nanti */}
            <PartnerLogos />
            <PopularDeals />
            <DestinationCategories />
            <PromoBlock />
            <Testimonials />
            <CtaSection />
        </MainLayout>
    );
}
