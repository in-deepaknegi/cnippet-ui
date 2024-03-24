import React from "react";
import Image from "next/image";
import Button from '@/components/ui/Button';
import H1 from '@/public/images/home/T1.webp'
import H2 from '@/public/images/home/T2.webp'
import H3 from '@/public/images/home/T3.webp'
import H4 from '@/public/images/home/T4.webp'


const Hero = () => {
    return (
        <section className="relative isolate bg-white h-screen overflow-hidden">
            <div className="max-w-full relative w-full h-full isolate">
                <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                    <div className="mx-auto max-w-2xl gap-0 lg:mx-0 lg:max-w-none xl:flex">
                        <div className="mt-20 w-full max-w-xl lg:max-w-2xl lg:flex-shrink-0">

                            <h1 className="text-5xl text-black font-semibold md:text-6xl">
                                Boost your creativity with our advanced tools and resources.
                            </h1>
                            <p className="mt-6 text-base text-gray-900 lg:text-lg">
                                Exquisitely designed and skillfully crafted elements and templates
                                that are ideal for initiating your upcoming project and ensuring a
                                professional and polished result.
                            </p>
                            <div className="mt-10 flex flex-col items-center sm:gap-y-0 gap-y-4 sm:flex-row gap-x-6">
                                <Button text="Get Started" url={"#"} />

                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-dusk-700"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-end sm:justify-start sm:gap-8 md:mt-16 lg:gap-6 xl:mt-0">
                            <div className="hidden w-1/2 flex-none pt-0 md:block lg:w-1/2 xl:pt-20">
                                <div className="relative">
                                    <Image
                                        src={H4}
                                        alt="C image 2"
                                        priority={false}
                                        className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        src={H1}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8  h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-none md:w-1/2 lg:w-1/2">
                                <div className="relative">
                                    <Image
                                        src={H3}
                                        alt="C image 2"
                                        priority={false}
                                        className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative hidden md:block">
                                    <Image
                                        src={H2}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative hidden md:block">
                                    <Image
                                        src={H4}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
