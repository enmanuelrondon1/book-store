"use client";

import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import { ReactNode, useRef } from "react";



export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl text-center mx-auto ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-primary/80 dark:to-secondary">
        <h1 className="text-4xl font-bold text-center items-center mt-6">
          Congratulations <br /> on your purchase!
        </h1>
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
