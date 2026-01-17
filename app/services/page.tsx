import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerList } from "@/components/animations/StaggerList";

export const metadata = {
    title: "Services | Media Agency",
    description: "Our production services: Short-form, Long-form, and Events.",
};

const services = [
    {
        name: "Short-Form Video",
        description: "High-impact vertical video optimized for social algorithms.",
        features: [
            "Concept Development",
            "On-site Shooting",
            "Dynamic Editing & Captions",
            "Quick Turnaround",
            "Platform Optimization (IG/TikTok)",
        ],
        price: "Custom Scope",
    },
    {
        name: "Long-Form & Podcasts",
        description: "Deep-dive content that builds authority and trust.",
        features: [
            "Multi-Cam Setup",
            "Professional Audio Recording",
            "Full Episode Editing",
            "Thumbnail Design",
            "Shorts/Clips Repurposing",
        ],
        price: "Custom Scope",
    },
    {
        name: "Events & Launches",
        description: "Capture the energy of your most important moments.",
        features: [
            "Event Coverage",
            "Same-Day Edits (Optional)",
            "Highlight Reels",
            "Full Keynote Recording",
            "Promotional Assets",
        ],
        price: "Custom Scope",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-32 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl lg:text-center mb-20">
                    <FadeIn>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Production Services</h1>
                        <p className="mt-6 text-xl leading-8 text-zinc-400 font-light">
                            We specialize in three core areas to ensure the highest quality output. We don't dilute our focus.
                        </p>
                    </FadeIn>
                </div>

                <StaggerList className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
                    {services.map((service) => (
                        <div key={service.name} className="flex flex-col relative p-8 hover:bg-white/5 transition-colors rounded-2xl border border-white/5 group">
                            <h3 className="text-xl font-medium leading-8 text-white">{service.name}</h3>
                            <p className="mt-4 text-base leading-7 text-zinc-400 font-light">{service.description}</p>
                            <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-zinc-300 flex-1">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        <Check className="h-5 w-4 flex-none text-white/40" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-8 border-t border-white/5">
                                <Button asChild className="w-full bg-white text-black hover:bg-zinc-200 border-none">
                                    <Link href="/contact">Inquire Now</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </StaggerList>
            </div>
        </div>
    );
}
