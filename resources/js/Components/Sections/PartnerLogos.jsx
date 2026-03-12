import React from "react";

export default function PartnerLogos() {
    const partners = [
        { id: 1, name: "Jack Wolfskin" },
        { id: 2, name: "The North Face" },
        { id: 3, name: "National Geo" },
        { id: 4, name: "Newfeel" },
        { id: 5, name: "Sunrise" },
        { id: 6, name: "Osprey" },
        { id: 7, name: "Patagonia" },
    ];

    return (
        <section className="w-full bg-brand-green py-8 border-t border-white/10 overflow-hidden flex relative group">
            <div className="flex space-x-16 min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused]">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className="text-white/60 hover:text-white transition-colors duration-300 font-bold text-lg md:text-xl tracking-widest uppercase cursor-default whitespace-nowrap"
                    >
                        {partner.name}
                    </div>
                ))}
            </div>

            <div
                aria-hidden="true"
                className="flex space-x-16 min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused]"
            >
                {partners.map((partner) => (
                    <div
                        key={partner.id + "-dup"}
                        className="text-white/60 hover:text-white transition-colors duration-300 font-bold text-lg md:text-xl tracking-widest uppercase cursor-default whitespace-nowrap"
                    >
                        {partner.name}
                    </div>
                ))}
            </div>
        </section>
    );
}
