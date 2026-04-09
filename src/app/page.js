"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import Landing from "@/components/Landing/index";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
  return (
    <div>
      <Landing />
    </div>
  );
}
