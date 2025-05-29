import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// dynamic import with SSR disabled
const ApolloScene = dynamic(() => import("@/components/apollo-scene"), {
  ssr: false,
});

interface ApolloSectionProps {
  title: string;
  description: string;
  modelPath: string;
}

export function ApolloSection({ title, description, modelPath }: ApolloSectionProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <ApolloScene modelPath={modelPath} onObjectLoad={() => setIsLoading(false)} />

      {isLoading ? (
        <ApolloSceneLoading />
      ) : (
        <>
          <div
            id="wrapper"
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            style={{
              background:
                "linear-gradient(to top, rgba(5,5,5,1) 15%, rgba(39,39,39,0) 80%)",
            }}
          >
            <h2 className="my-4 text-4xl font-thin tracking-[0.25em] text-white italic">
              {title}
            </h2>
            <p className="max-w-3xl text-sm font-thin tracking-[0.25em] text-white 2xl:text-lg">
              {description}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

const ApolloSceneLoading = () => {
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
