"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Landing() {
    const landingRef = useRef(null);
    const roadRef = useRef(null);
    const carRef = useRef(null);
    const textRef = useRef(null);
    const statsRefs = useRef([]);

    useGSAP(() => {
        gsap.from(roadRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: landingRef.current,
                start: 'top top',
                end: '+=250',
                scrub: 1,
                pin: true,
                anticipatePin: 1
            },
        });

        tl.to(textRef.current, {
            width: '100%',
            ease: 'none',
        }, 0);

        tl.to(carRef.current, {
            x: '100vw',
            ease: 'none',
        }, 0)


    }, {
        scope: landingRef
    })

    return (
        <section ref={landingRef} className="relative w-full h-screen bg-[#d1d1d1] overflow-hidden flex items-center">
            <div ref={roadRef} className="relative w-full h-50 bg-[#1e1e1e] flex items-center overflow-hidden justify-center">
                <div ref={textRef}
                     className="absolute top-0 left-0 h-full bg-[#45db7d] overflow-hidden flex items-center whitespace-nowrap"
                     style={{ width: '0%' }}
                     >
                    <h1 className="text-[#111111] text-6xl font-black tracking-[0.5em] pl-10">
                        WELCOME ITZFIZZ
                    </h1>
                </div>
                <div
                    ref={carRef}
                    className="relative w-full h-full">
                    <Image
                        src="/images/car.png"
                        alt="car"
                        height="430"
                        width="430"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}