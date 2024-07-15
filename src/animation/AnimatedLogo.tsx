import { AnimatePresence, Variants, motion } from "framer-motion";

export function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#14b8a6",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-teal-500 stroke-teal-500 dark:fill-teal-200"
      >
        <motion.path
          d="M60.8,12.7C56.5,10.4,51.2,9,46.3,9c-5.5,0-11.7,1.5-16.2,5.2c-2.8,2.3-5.1,5.5-5.1,9.2c0,6,4.5,10.2,10.3,12.4
          c5.3,2,10.5,2.5,15.9,4.1c3.8,1.1,7.5,2.7,10.6,5.1c7.5,5.9,7.3,15.3,0.1,21.2c-5.2,4.3-11.3,5.9-17.9,6c-7.1,0.1-14-1.4-20.1-5.1
          c-3.6-2.2-6.5-5.5-7.7-9.7c-0.3-1-0.5-2-0.6-3.1c-0.2-2.4-2-4.2-4.4-4.2c-2.6,0-4.7,2.2-4.5,4.8c0.3,5.7,2.6,11.1,6.4,15.3
          c4.4,5.1,10.4,8.5,16.7,10.9c5.3,2,10.9,2.6,16.5,2.6c7.8,0,15.7-1.8,22.1-6.4c4.9-3.5,8.4-8.5,9.4-14.7c1.3-7.9-0.8-14.6-6.8-20
          C70.4,21.1,65.6,16.1,60.8,12.7z"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
