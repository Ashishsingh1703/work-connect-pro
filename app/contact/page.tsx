import { Button } from "@/components/ui/Button";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact | Media Agency",
    description: "Get in touch with us.",
};

export default function ContactPage() {
    return (
        <div className="isolate relative pt-24 pb-24 sm:pt-32 sm:pb-32 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">

                {/* Contact Info */}
                <div className="flex-1 lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's talk production.</h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Ready to start a project? Have a question about our services? Drop us a line. We're currently accepting new clients for 2026.
                    </p>

                    <dl className="mt-10 space-y-4 text-base leading-7 text-zinc-300">
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Email</span>
                                <Mail className="h-7 w-6 text-zinc-400" aria-hidden="true" />
                            </dt>
                            <dd><a className="hover:text-white" href="mailto:psawhale4141@gmail.com">psawhale4141@gmail.com</a></dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="flex-none">
                                <span className="sr-only">Address</span>
                                <MapPin className="h-7 w-6 text-zinc-400" aria-hidden="true" />
                            </dt>
                            <dd>Pune,<br /> Maharashtra, India</dd>
                        </div>
                    </dl>
                </div>

                {/* Contact Form (Simple wrapper) */}
                <div className="flex-1 bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/5">
                    <form action="#" method="POST" className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="name" id="name" autoComplete="given-name" className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm sm:leading-6 transition-all placeholder:text-zinc-600" placeholder="Jane Doe" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm sm:leading-6 transition-all placeholder:text-zinc-600" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message" rows={4} className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm sm:leading-6 transition-all placeholder:text-zinc-600" placeholder="Tell us about your project..."></textarea>
                            </div>
                        </div>
                        <Button type="submit" className="w-full h-12 text-base bg-white text-black hover:bg-zinc-200">
                            Send Message
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}
