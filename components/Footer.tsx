import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-1 text-2xl">
                            <span className="font-light tracking-[0.25em] text-white font-display uppercase">Lal</span>
                            <span className="font-light tracking-[0.25em] text-red-500 font-display uppercase">Mirch</span>
                            <span className="font-light tracking-[0.25em] text-white font-display uppercase">Media</span>
                            <span className="text-red-500 font-serif italic text-3xl ml-0.5">.</span>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-zinc-400 max-w-xs font-serif">
                            Premium photography and visual storytelling for ambitious brands and creators.
                            We focus on quality, artistry, and reliability.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <Link href="/services" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        Short-form
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        Long-form
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        Events & Launch
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <Link href="/about" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/work" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-sm leading-6 text-zinc-400 hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-zinc-500">
                        &copy; {new Date().getFullYear()} LAL MIRCH MEDIA Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
