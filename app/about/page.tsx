import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
    title: "About | Media Agency",
    description: "About our agency and our philosophy.",
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-32 px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <FadeIn>
                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl mb-12 text-balance leading-tight">
                        We are a team of obsession-driven creators.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2} className="space-y-8 text-xl text-zinc-400 leading-relaxed font-light">
                    <p>
                        Founded in 2024, our agency was built on a simple premise: content shouldn't be complicated. In a world of infinite noise, clarity wins. Quality wins.
                    </p>
                    <p>
                        We don't try to be everything to everyone. We are not a full-service marketing agency. We don't run ads, manage social accounts, or provide "growth hacking" services.
                    </p>
                    <p className="text-white font-medium text-2xl">
                        We just make damn good videos.
                    </p>
                    <p>
                        Whether it's a 30-second vertical for TikTok or a 30-minute documentary for YouTube, we treat every frame with the same level of care and precision. Our background is in cinema, but our focus is on the modern digital landscape.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="mt-24 pt-16 border-t border-white/5">
                        <h2 className="text-2xl font-medium text-white mb-12">Our Principles</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            <div>
                                <dt className="text-white font-medium text-lg">Speed without Haste</dt>
                                <dd className="mt-4 text-zinc-400 leading-relaxed font-light">We move fast because we know the tools, not because we cut corners. Efficiency is our hallmark.</dd>
                            </div>
                            <div>
                                <dt className="text-white font-medium text-lg">Quality over Quantity</dt>
                                <dd className="mt-4 text-zinc-400 leading-relaxed font-light">One great asset is worth more than ten mediocre ones. We prioritize impact.</dd>
                            </div>
                            <div>
                                <dt className="text-white font-medium text-lg">Transparent Pricing</dt>
                                <dd className="mt-4 text-zinc-400 leading-relaxed font-light">No hidden fees. No retainers for work we didn't do. You pay for the output.</dd>
                            </div>
                            <div>
                                <dt className="text-white font-medium text-lg">Client-First</dt>
                                <dd className="mt-4 text-zinc-400 leading-relaxed font-light">We build relationships, not just client lists. Your success is our portfolio.</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="mt-24">
                        <Button asChild size="lg" className="rounded-full px-8 h-12 bg-white text-black hover:bg-zinc-200">
                            <Link href="/contact">Work With Us</Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
