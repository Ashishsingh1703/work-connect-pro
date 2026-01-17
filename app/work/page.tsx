import { StaggerList } from "@/components/animations/StaggerList";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
    title: "Work | Media Agency",
    description: "A selection of our latest production work.",
};

const works = [
    {
        category: "Brand Content",
        client: "Tech Startups",
        title: "Launch Day Hype",
        format: "Video · Production",
    },
    {
        category: "Podcasts",
        client: "Founder Stories",
        title: "Ep 42: Building in Public",
        format: "Podcast · Multi-cam",
    },
    {
        category: "Events",
        client: "Global Summit",
        title: "2024 Keynote Recap",
        format: "Event · Highlight Film",
    },
    {
        category: "Brand Content",
        client: "Fashion Brand",
        title: "Fall Collection Teaser",
        format: "Brand · Short-form",
    },
    {
        category: "Documentary",
        client: "Local Artisan",
        title: "The Craft",
        format: "Documentary · Film",
    },
    {
        category: "Commercial",
        client: "Beverage Co",
        title: "Summer Drink Campaign",
        format: "Commercial · Ad Film",
    },
];

export default function WorkPage() {
    return (
        <div className="pt-32 pb-32 px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-7xl mb-24">
                <FadeIn>
                    <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
                        Selected Work
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
                        A curated selection of projects that define our standard.
                    </p>
                </FadeIn>
            </div>

            {/* Work Grid */}
            <StaggerList className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer transition-transform duration-500 hover:-translate-y-1"
                    >
                        {/* Thumbnail */}
                        <div className="relative aspect-video overflow-hidden bg-zinc-900 mb-4">
                            {/* Gradient Base */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/80 via-zinc-800 to-zinc-900 transition-transform duration-700 group-hover:scale-105" />

                            {/* Noise Overlay (optional but recommended) */}
                            <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.png')]" />

                            {/* Hover CTA */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                                    View Project
                                </span>
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-lg font-medium text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                                    {work.title}
                                </h3>
                                <p className="text-sm text-zinc-500 mt-1">{work.client}</p>
                                <p className="text-xs text-zinc-500 mt-1">{work.format}</p>
                            </div>

                            <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                                {work.category}
                            </span>
                        </div>
                    </div>
                ))}
            </StaggerList>
        </div>
    );
}
