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
    const addToStatsRef = useRef(null);

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
                end: '+=300',
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
            <div
                ref={addToStatsRef}
                className="absolute top-[20%] left-[50%] bg-[#def54f] flex flex-col justify-center items-center shadow-lg w-60 h-40 rounded-[10px]"
            >
                <h2 className="text-4xl font-black text-black">58%</h2>
                <p className="text-xs text-black mt-1">Increase in pick up point use</p>
            </div>

            <div
                ref={addToStatsRef}
                className="absolute top-[20%] left-[70%] bg-[#333333] flex flex-col justify-center items-center shadow-lg w-60 h-40 rounded-[10px]"
            >
                <h2 className="text-4xl font-black text-white">27%</h2>
                <p className="text-xs text-white mt-1">Increase in pick up point use</p>
            </div>

            <div
                ref={addToStatsRef}
                className="absolute bottom-[20%] left-[45%] bg-[#6ac9ff] flex flex-col justify-center items-center shadow-lg w-60 h-40 rounded-[10px]"
            >
                <h2 className="text-4xl font-black text-black">23%</h2>
                <p className="text-xs text-black mt-1">Decreased in customer phone calls</p>
            </div>

            <div
                ref={addToStatsRef}
                className="absolute bottom-[20%] left-[65%] bg-[#fa7328] flex flex-col justify-center items-center shadow-lg w-60 h-40 rounded-[10px]"
            >
                <h2 className="text-4xl font-black text-black">40%</h2>
                <p className="text-xs text-black mt-1">Decreased in customer phone calls</p>
            </div>

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
                    className="relative w-full h-full bg-[#45db7d]">
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