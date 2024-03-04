import React from "react";
import Button from '@/components/ui/Button';

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-0 lg:py-24">
                <div className="hidden sm:mb-8 sm:flex justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-dusk-800 ring-1 ring-gray-900/30 hover:ring-gray-300">
                        Announcing our next round of funding.{" "}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true"></span>Read
                            more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
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
    );
};

export default Hero;
