import dynamic from "next/dynamic";

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
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <ApolloScene modelPath={modelPath} />

      <div
        id="wrapper"
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{
          background: "linear-gradient(to top, rgba(5,5,5,1) 15%, rgba(39,39,39,0) 80%)",
        }}
      >
        <h2 className="my-4 text-4xl font-thin tracking-[0.25em] text-white italic">
          {title}
        </h2>
        <p className="max-w-3xl text-sm font-thin tracking-[0.25em] text-white 2xl:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
