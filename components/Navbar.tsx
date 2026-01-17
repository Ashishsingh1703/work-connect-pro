"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-xl font-light tracking-[0.25em] text-white font-display uppercase">
                                Lal
                            </span>
                            <motion.span 
                                className="text-xl font-light tracking-[0.25em] text-red-500 font-display uppercase"
                                animate={{ 
                                    textShadow: ["0 0 0px rgba(239,68,68,0)", "0 0 20px rgba(239,68,68,0.5)", "0 0 0px rgba(239,68,68,0)"]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Mirch
                            </motion.span>
                            <span className="text-xl font-light tracking-[0.25em] text-white font-display uppercase">
                                Media
                            </span>
                            <motion.span 
                                className="text-red-500 font-serif italic text-2xl ml-0.5"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                .
                            </motion.span>
                        </motion.div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium leading-6 text-zinc-300 hover:text-white transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-white border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                        Contact <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu state. */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <div className="flex items-center gap-1">
                                    <span className="text-xl font-light tracking-[0.25em] text-white font-display uppercase">Lal</span>
                                    <span className="text-xl font-light tracking-[0.25em] text-red-500 font-display uppercase">Mirch</span>
                                    <span className="text-xl font-light tracking-[0.25em] text-white font-display uppercase">Media</span>
                                    <span className="text-red-500 font-serif italic text-2xl ml-0.5">.</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-zinc-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
