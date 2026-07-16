import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-off-white">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Compassionate home care assistant supporting an individual in a bright, warm living room"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-charcoal/95 via-charcoal/80 to-transparent opacity-95 lg:opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Life is better <br className="hidden sm:inline" />
            <span className="text-peach">at home.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-sans leading-relaxed text-off-white/90">
            Supporting individuals and families with compassionate care that
            helps people remain where they feel most comfortable — at home.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 font-semibold rounded-lg shadow-lg shadow-coral/30 bg-coral hover:bg-coral/90 transition-all duration-200 text-center text-off-white focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Find Care Now
            </Link>

            <Link
              href="/care-journey"
              className="px-8 py-4 font-medium rounded-lg backdrop-blur-sm border border-off-white/30 text-off-white hover:bg-off-white/10 transition-all duration-200 text-center focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Our Care Journey
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-off-white/15 grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold text-peach">100%</p>
              <p className="text-xs sm:text-sm mt-1 text-off-white/85">
                Vetted Caregivers
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-peach">24/7</p>
              <p className="text-xs sm:text-sm mt-1 text-off-white/85">
                On-Call Support
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-peach">Direct</p>
              <p className="text-xs sm:text-sm mt-1 text-off-white/85">
                Family Portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}