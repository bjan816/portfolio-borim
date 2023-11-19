"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from "next/link"
import { Link as ScrollLink } from 'react-scroll'

const HeroSection = () => {
    return (
        <section id='home'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        <span>
                            {/* className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-500 to-purple-500' */}
                            Hi, I'm{''}
                        </span>
                        <div className='intro-gradient' style={{ paddingTop: '5px' }}>
                            <TypeAnimation
                                sequence={[
                                    'Borim Jang',
                                    1000,
                                    'Software Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                //style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>
                    <h2 className='text-[#ADB7BE] text-3xl sm:text-4xl mb-4 font-extrabold'>
                        Computer Science Major
                    </h2>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-semibold'>
                        Always on a mission to learn and develop technically and personally. Passionate about making a positive difference to the world through technology.
                    </p>
                    <div>
                        <ScrollLink to="work" smooth={true} duration={500} className='inline-block'>
                            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-400">
                                View Work
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight className="ml-3" />
                                </span>
                            </button>
                        </ScrollLink>
                        <Link
                            href="/contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>

                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-5'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/hero-image.png'
                            alt='Hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection