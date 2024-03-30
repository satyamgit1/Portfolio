import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/FadeUp";
import Link from "next/link";

// Inside your component
<Link href="/resume.pdf">
  <a
    className="mt-4 inline-block rounded-lg px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-blue-700"
    style={{ backgroundColor: "#156064" }}
    target="_blank"
  >
    View Resume
  </a>
</Link>


export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className=" flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text py-2 text-5xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl xl:text-8xl">
                Satyam Singh
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                <span className="text-xl text-teal-600 dark:text-teal-300 sm:text-3xl">
                  Hi
                </span>
                , I&apos;m
                <span className="text-teal-600 dark:text-teal-300">
                  {" "}
                  Satyam Singh
                </span>{" "}
                , I turn vision into reality with code and design.
              </div>
            </FadeUp>
            {/* Resume Button */}
            <FadeUp key="resume-button" duration={0.6} delay={0.4}>
              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-4 inline-block rounded-lg px-6 py-3 text-lg font-medium text-white shadow-lg hover:bg-blue-700"
                style={{ backgroundColor: "#156064" }}
              >
                View Resume
              </a>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
