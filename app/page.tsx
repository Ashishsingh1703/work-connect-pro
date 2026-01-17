// import Link from "next/link";
// import { Button } from "@/components/ui/Button";
// import { ArrowRight, Video, Mic, Calendar } from "lucide-react";
// import { FadeIn } from "@/components/animations/FadeIn";

// export default function Home() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-32 pb-20 lg:px-8 lg:pt-48 lg:pb-32 text-center overflow-hidden">
//         {/* Background Gradient/Glow */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50 mix-blend-screen" />

//         <FadeIn delay={0.1}>
//           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl max-w-5xl mx-auto text-balance">
//             We bring visual stories <br className="hidden sm:block" />
//             <span className="text-zinc-500">to life.</span>
//           </h1>
//         </FadeIn>

//         <FadeIn delay={0.3}>
//           <p className="mt-8 text-xl leading-8 text-secondary-foreground/60 max-w-2xl mx-auto font-light">
//             A premium production agency for brands, founders, and creators.
//             We focus purely on high-quality production—no fluff, just results.
//           </p>
//         </FadeIn>

//         <FadeIn delay={0.5}>
//           <div className="mt-12 flex items-center justify-center gap-x-8">
//             <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-white text-black hover:bg-white/90">
//               <Link href="/contact">
//                 Start a Project
//               </Link>
//             </Button>
//             <Link href="/work" className="text-sm font-medium leading-6 text-white flex items-center gap-2 hover:text-zinc-300 transition-colors">
//               View our work <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </FadeIn>
//       </section>

//       {/* Services Snapshot */}
//       <section className="px-6 py-32 lg:px-8 border-t border-white/5">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl lg:text-center">
//             <FadeIn>
//               <h2 className="text-base font-medium leading-7 text-zinc-500 tracking-wide uppercase">What We Do</h2>
//               <p className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-5xl text-balance">
//                 Production expertise, simplified.
//               </p>
//               <p className="mt-6 text-lg leading-relaxed text-zinc-400 font-light">
//                 We don't manage ads or promise viral growth. We just produce exceptional assets that you can use anywhere.
//               </p>
//             </FadeIn>
//           </div>
//           <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
//             <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
//               <FadeIn delay={0.2} className="flex flex-col">
//                 <dt className="flex items-center gap-x-3 text-lg font-medium leading-7 text-white">
//                   <Video className="h-5 w-5 flex-none text-zinc-400" aria-hidden="true" />
//                   Short-Form Video
//                 </dt>
//                 <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-500">
//                   <p className="flex-auto font-light">Instagram Reels, TikToks, and YouTube Shorts designed to capture attention immediately.</p>
//                 </dd>
//               </FadeIn>
//               <FadeIn delay={0.4} className="flex flex-col">
//                 <dt className="flex items-center gap-x-3 text-lg font-medium leading-7 text-white">
//                   <Mic className="h-5 w-5 flex-none text-zinc-400" aria-hidden="true" />
//                   Long-Form & Podcasts
//                 </dt>
//                 <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-500">
//                   <p className="flex-auto font-light">Full-length YouTube videos, interviews, and podcast production with professional audio and multi-cam setups.</p>
//                 </dd>
//               </FadeIn>
//               <FadeIn delay={0.6} className="flex flex-col">
//                 <dt className="flex items-center gap-x-3 text-lg font-medium leading-7 text-white">
//                   <Calendar className="h-5 w-5 flex-none text-zinc-400" aria-hidden="true" />
//                   Events & Launches
//                 </dt>
//                 <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-500">
//                   <p className="flex-auto font-light">Cinematic recaps and launch videos that elevate your brand events and product announcements.</p>
//                 </dd>
//               </FadeIn>
//             </dl>
//           </div>
//         </div>
//       </section>

//       {/* Process / How it works */}
//       <section className="px-6 py-24 sm:py-32 lg:px-8 border-t border-white/5 bg-zinc-900/20">
//         <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-x-10">
//           <div className="lg:w-1/2">
//             <FadeIn direction="right">
//               <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 A seamless process.
//               </h2>
//               <p className="mt-6 text-lg leading-8 text-zinc-400">
//                 We've stripped away the bureaucracy. From concept to final delivery, our workflow is designed for speed and quality.
//               </p>
//             </FadeIn>
//           </div>
//           <div className="mt-16 lg:mt-0 lg:w-1/2 grid grid-cols-1 gap-8 sm:grid-cols-3">
//             <FadeIn delay={0.2} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
//               <span className="text-4xl font-bold text-white/10">01</span>
//               <h3 className="mt-4 text-lg font-semibold text-white">Concept</h3>
//               <p className="mt-2 text-sm text-zinc-400">We align on the vision and deliverables.</p>
//             </FadeIn>
//             <FadeIn delay={0.4} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
//               <span className="text-4xl font-bold text-white/10">02</span>
//               <h3 className="mt-4 text-lg font-semibold text-white">Shoot</h3>
//               <p className="mt-2 text-sm text-zinc-400">Our team handles all capture and direction.</p>
//             </FadeIn>
//             <FadeIn delay={0.6} className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
//               <span className="text-4xl font-bold text-white/10">03</span>
//               <h3 className="mt-4 text-lg font-semibold text-white">Edit</h3>
//               <p className="mt-2 text-sm text-zinc-400">Polished, graded, and delivered ready to post.</p>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative isolate px-6 py-32 sm:py-40 lg:px-8 text-center border-t border-white/5">
//         <div className="mx-auto max-w-2xl">
//           <FadeIn>
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Ready to elevate your content?
//             </h2>
//             <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
//               Let's discuss your production needs. No hard sales, just a conversation about what we can build together.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Button asChild size="lg" className="rounded-full">
//                 <Link href="/contact">Book a Call</Link>
//               </Button>
//             </div>
//           </FadeIn>
//         </div>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Video, Mic, Calendar } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero />

      {/* Services Snapshot */}
      <section className="px-6 py-32 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl lg:text-center -mt-16 lg:-mt-20">
            <FadeIn>
              <h2 className="text-base font-medium leading-7 text-zinc-500 tracking-widest uppercase font-sans">
                What We Do
              </h2>
              <p className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl text-balance font-display">
                Production expertise, <span className="italic font-serif text-zinc-300">simplified.</span>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400 font-serif font-light">
                We produce
                exceptional assets that you can use anywhere. We save your time
                and money.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <FadeIn delay={0.2} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-light leading-7 text-white font-display">
                  <Video className="h-5 w-5 flex-none text-zinc-400" />
                  Short-Form Video
                </dt>
                <dd className="mt-4 text-base leading-7 text-zinc-500 font-serif font-light">
                  Instagram Reels, TikToks, and YouTube Shorts designed to capture
                  attention immediately.
                </dd>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-light leading-7 text-white font-display">
                  <Mic className="h-5 w-5 flex-none text-zinc-400" />
                  Long-Form & Podcasts
                </dt>
                <dd className="mt-4 text-base leading-7 text-zinc-500 font-serif font-light">
                  Full-length YouTube videos, interviews, and podcast production
                  with professional audio and multi-cam setups.
                </dd>
              </FadeIn>

              <FadeIn delay={0.6} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-light leading-7 text-white font-display">
                  <Calendar className="h-5 w-5 flex-none text-zinc-400" />
                  Events & Launches
                </dt>
                <dd className="mt-4 text-base leading-7 text-zinc-500 font-serif font-light">
                  Cinematic recaps and launch videos that elevate your brand
                  events and product announcements.
                </dd>
              </FadeIn>
            </dl>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 sm:py-32 lg:px-8 border-t border-white/5 bg-zinc-900/20">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-x-10">
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl font-display">
                A seamless <span className="italic font-serif text-zinc-300">process.</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400 font-serif font-light">
                We've stripped away the bureaucracy. From concept to final
                delivery, our workflow is designed for speed and quality.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 lg:mt-0 lg:w-1/2 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Concept", desc: "We align on vision and scope." },
              { step: "02", title: "Shoot", desc: "We handle capture and direction." },
              { step: "03", title: "Edit", desc: "Polished and platform-ready." },
            ].map((item, i) => (
              <FadeIn
                key={item.step}
                delay={0.2 * (i + 1)}
                className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5"
              >
                <span className="text-4xl font-light text-white/10 font-display">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-light text-white font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 font-serif">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 sm:py-40 lg:px-8 text-center border-t border-white/5">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl font-display">
              Ready to elevate your <span className="italic font-serif text-zinc-300">content?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 font-serif font-light">
              No hard sales. Just a conversation about what we can build
              together.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full font-display font-light tracking-wide">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
