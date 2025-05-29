import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

export const SceneLoading = () => {
  const [isTakingLong, setIsTakingLong] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTakingLong(true);
    }, 5000); // Show message after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <motion.div
        className="relative flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-16 w-16 rounded-full border-4 border-white/20 border-t-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="flex flex-col items-center gap-2">
          <motion.span
            className="text-sm font-light tracking-[0.25em] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            LOADING
          </motion.span>
          <AnimatePresence>
            {isTakingLong && (
              <motion.span
                className="text-center text-xs leading-loose font-light tracking-[0.25em] text-white/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                This is taking a bit longer than expected, <br /> sorry for the wait
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
