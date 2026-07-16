"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "motion/react";

interface Pillar {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const PILLARS: Pillar[] = [
  {
    id: "surroundings",
    title: "Familiar surroundings",
    description:
      "We believe healing and comfort begin with the objects, memories, and rooms you know best. Our care adapts completely to your personal environment.",
    image: "1.jpg",
    imageAlt:
      "A cozy, sunlit living room showing a safe, familiar home environment.",
  },
  {
    id: "independence",
    title: "Preserving independence",
    description:
      "Receiving care shouldn't mean losing control. We assist with daily tasks while empowering you to maintain your routines, choices, and personal freedom.",
    image: "2.jpg",
    imageAlt:
      "An active adult happily cooking a healthy meal in their home kitchen.",
  },
  {
    id: "dignity",
    title: "Upholding dignity",
    description:
      "Every individual deserves respectful, private, and deeply compassionate care. Our vetted professionals protect your privacy and honor your personal boundaries.",
    image: "3.jpg",
    imageAlt:
      "A compassionate caregiver sharing a respectful, warm smile with a senior.",
  },
  {
    id: "connection",
    title: "Staying connected",
    description:
      "Remaining at home doesn't mean isolation. We facilitate visits, support local outings, and keep you deeply anchored to your neighbors, family, and local community.",
    image: "4.jpg",
    imageAlt:
      "Friends gathering together in a warm garden setting, sharing laughter.",
  },
  {
    id: "remaining",
    title: "Remaining at home",
    description:
      "Ultimately, home is where the heart is. Our holistic platform brings clinical safety and everyday support directly to your doorstep, keeping families together.",
    image: "5.jpg",
    imageAlt:
      "A beautiful, safe residential house front showcasing a warm, comforting exterior.",
  },
];

/** Thread node — its own component so useTransform sits at a stable
 *  position per instance, not inside the parent's map(). Colour
 *  interpolates from a dim track tone to solid teal as scroll passes it. */
function ThreadNode({
  progress,
  threshold,
  isLast,
}: {
  progress: MotionValue<number>;
  threshold: number;
  isLast: boolean;
}) {
  const fill = useTransform(
    progress,
    [Math.max(threshold - 0.06, 0), threshold],
    ["rgba(15,110,86,0.25)", isLast ? "#D85A30" : "#0F6E56"],
  );

  return (
    <motion.span
      style={{ backgroundColor: fill }}
      className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
      aria-hidden="true"
    />
  );
}

function PillarRow({
  pillar,
  index,
  reduceMotion,
}: {
  pillar: Pillar;
  index: number;
  reduceMotion: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const isEven = index % 2 === 0;

  // Alternating silhouette so the media cards aren't identical rectangles.
  const shapeClass = isEven
    ? "rounded-[3rem_1rem_3rem_1rem]"
    : "rounded-[1rem_3rem_1rem_3rem]";

  return (
    <div
      ref={rowRef}
      className={index % 2 === 1 ? "bg-soft-teal/25" : undefined}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-12 md:gap-20 lg:px-8 lg:py-28">
        {/* Narrative block */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`md:col-span-5 flex flex-col justify-center ${
            isEven ? "md:order-1" : "md:order-2 md:col-start-8"
          }`}
        >
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">
            Our promise
          </span>
          <h3 className="font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            {pillar.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-warm-grey sm:text-lg">
            {pillar.description}
          </p>
        </motion.div>

        {/* Media block */}
        <div
          className={`group relative h-[300px] w-full overflow-hidden ${shapeClass} border border-teal/5 bg-soft-teal shadow-xl shadow-charcoal/5 sm:h-[400px] md:col-span-6 ${
            isEven ? "md:order-2 md:col-start-7" : "md:order-1"
          }`}
        >
          <motion.div
            style={reduceMotion ? undefined : { y: yParallax }}
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -inset-y-16 left-0 right-0 h-[calc(100%+8rem)] w-full"
          >
            <Image
              src={`/assets/${pillar.image}`}
              alt={pillar.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 45vw, 100vw"
              quality={85}
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-charcoal/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function PillarFeatures() {
  const reduceMotion = useReducedMotion() ?? false;
  const rowsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: threadProgress } = useScroll({
    target: rowsRef,
    offset: ["start end", "end start"],
  });

  const threadScale = useTransform(threadProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-white font-sans text-charcoal">
      {/* Intro */}
      <div className="mx-auto max-w-3xl px-6 pt-24 text-center lg:px-8 lg:pt-36">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
          Our core promises
        </span>
        <h2 className="font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
          A foundation built on respect.
        </h2>
        <p className="mt-4 text-lg text-warm-grey sm:text-xl">
          At CarePlus, everything we do centers around five core pillars of care
          designed to preserve what matters most — connected, not isolated, from
          the first visit to the last.
        </p>
      </div>

      {/* Flowing rows with a connecting thread */}
      <div ref={rowsRef} className="relative mt-8">
        {!reduceMotion && (
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-charcoal/10 md:block"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY: threadScale }}
              className="h-full w-full origin-top bg-teal"
            />
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.id}
                className="absolute left-0 w-full"
                style={{ top: `${(index + 0.5) * (100 / PILLARS.length)}%` }}
              >
                <ThreadNode
                  progress={threadProgress}
                  threshold={(index + 0.5) / PILLARS.length}
                  isLast={index === PILLARS.length - 1}
                />
              </div>
            ))}
          </div>
        )}

        <div className="divide-y divide-charcoal/5">
          {PILLARS.map((pillar, index) => (
            <PillarRow
              key={pillar.id}
              pillar={pillar}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
