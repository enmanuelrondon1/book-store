import Meteors from "@/components/ui/meteors";

export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gray-100/100 md:shadow-xl mt-4 md:mt-16 md:h-[500px] dark:bg-gray-950 ">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <h1 className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent font-bold">
          Enmanuel-web
        </h1>
        <p className="text-gray-500 text-center text-xl">
          A fantastic world awaits you in the book store
        </p>
      </span>
    </div>
  );
}
