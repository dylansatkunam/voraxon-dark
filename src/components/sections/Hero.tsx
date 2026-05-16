"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { openGHLBooking } from '@/components/ui/ghl-booking';

import { Variants } from 'framer-motion';

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 bg-[#111111]">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            
            <div className="relative z-10">
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    delayChildren: 1,
                                },
                            },
                        },
                        item: {
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.3,
                                    duration: 2,
                                },
                            },
                        },
                    }}
                    className="absolute inset-0 -z-20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                        alt="background"
                        className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block opacity-30"
                        width="3276"
                        height="4095"
                    />
                </AnimatedGroup>
                <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#111111_75%)]" />
                
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <AnimatedGroup variants={transitionVariants}>
                            <button
                                onClick={openGHLBooking}
                                className="hover:bg-white/5 bg-white/[0.02] group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300">
                                <span className="text-[#F5F5F0] text-sm font-sans">AI Automation Agency</span>
                                <span className="block h-4 w-0.5 border-l border-white/10 bg-white/20"></span>

                                <div className="bg-[#1f9955] group-hover:bg-[#167a42] size-6 overflow-hidden rounded-full duration-500">
                                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3 text-white" />
                                        </span>
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3 text-white" />
                                        </span>
                                    </div>
                                </div>
                            </button>
                
                            <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.5rem] font-heading font-normal tracking-tight text-[#F5F5F0]">
                                The AI Team <br />
                                <span className="text-[#F5F5F0]/50 italic">Behind Your Business.</span>
                            </h1>
                            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg md:text-xl font-sans font-light text-[#F5F5F0]/70 leading-relaxed">
                                We build custom AI workers that handle the repetitive work. Your team focuses on what actually grows the business.
                            </p>
                        </AnimatedGroup>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                            <button 
                                onClick={openGHLBooking}
                                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1f9955] px-8 font-sans text-lg text-[#F5F5F0] transition-all duration-300 hover:bg-[#167a42] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1f9955] focus:ring-offset-2 focus:ring-offset-[#111111]"
                            >
                                <span className="mr-2">Get Your System Built</span>
                                <svg 
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <Link 
                                href="#process"
                                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-8 font-sans text-lg text-[#F5F5F0] transition-all duration-300 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#111111]"
                            >
                                <span>See How It Works</span>
                            </Link>
                        </AnimatedGroup>
                    </div>
                </div>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-24 md:mt-32">
                        <div
                            aria-hidden
                            className="bg-gradient-to-b to-[#111111] absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="aspect-[15/8] relative rounded-2xl border border-white/10 object-cover"
                                src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                                alt="Voraxon Dashboard Preview"
                                width="2700"
                                height="1440"
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    );
}
