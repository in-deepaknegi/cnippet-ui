import React from "react";
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <>
            <section className="relative isolate overflow-hidden">
                <div className="mx-auto max-w-4xl px-6 py-16 lg:px-0 lg:py-24">
                    <h1 className="bg-gradient-to-br from-rose-600 via-purple-950 to-teal-500 text-center text-5xl font-semibold md:text-6xl inline-block text-transparent bg-clip-text">
                        Boost your creativity with our advanced tools and resources.
                    </h1>
                    <p className="mt-6 text-center text-base text-dusk-700 md:text-lg">
                        Exquisitely designed and skillfully crafted elements and templates
                        that are ideal for initiating your upcoming project and ensuring a
                        professional and polished result.
                    </p>
                    <div className="mt-10 flex flex-col items-center sm:gap-y-0 gap-y-4 sm:flex-row gap-x-6 justify-center">
                        <Button text="Get Started" url={"#"} />

                        <a
                            href="#"
                            className="my-auto text-sm font-semibold leading-6 text-dusk-700"
                        >
                            Read more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* <section className="relative isolate bg-white h-screen overflow-hidden">
                <div className="max-w-full relative w-full h-full isolate">
                    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                        <div className="mx-auto max-w-2xl gap-0 lg:mx-0 lg:max-w-none xl:flex">
                            <div className="mt-20 w-full max-w-xl lg:max-w-2xl lg:flex-shrink-0">
                                <div className="hidden sm:mb-8 sm:flex">
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-1">
                                        Announcing our next round of funding.{" "}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            ></span>
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                                <h1 className="text-5xl text-black font-semibold md:text-6xl">
                                    Data to enrich your online bussiness
                                </h1>
                                <p className="mt-6 text-base text-gray-900 lg:text-lg">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                    fugiat aliqua.
                                </p>
                                <div className="mt-10 flex gap-x-6">
                                    <a
                                        href="#"
                                        className="my-auto text-sm font-semibold leading-6 text-gray-800"
                                    >
                                        Read more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-10 flex justify-end sm:justify-start sm:gap-8 md:mt-16 lg:gap-6 xl:mt-0">
                                <div className="hidden w-1/2 flex-none pt-0 md:block lg:w-1/2 xl:pt-20">
                                    <div className="relative">
                                        <Image
                                            src={C4}
                                            alt="C image 2"
                                            priority={false}
                                            className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={C1}
                                            alt="C image 2"
                                            priority={false}
                                            className="mt-8  h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex-none md:w-1/2 lg:w-1/2">
                                    <div className="relative">
                                        <Image
                                            src={C3}
                                            alt="C image 2"
                                            priority={false}
                                            className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                        />
                                    </div>
                                    <div className="relative hidden md:block">
                                        <Image
                                            src={C2}
                                            alt="C image 2"
                                            priority={false}
                                            className="mt-8 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                        />
                                    </div>
                                    <div className="relative hidden md:block">
                                        <Image
                                            src={C4}
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
            </section> */}
        </>
    );
};

export default Hero;
