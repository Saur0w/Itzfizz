"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Landing from "@/components/Landing";

export default function Home() {
    const rafIdRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.08,
            wheelMultiplier: 1.2,
        });

        function raf(time) {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Landing />
        </div>
    );
}