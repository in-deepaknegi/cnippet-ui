import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import H1 from "@/public/images/home/T1.webp";
import H2 from "@/public/images/home/T2.webp";
import H3 from "@/public/images/home/T3.webp";
import H4 from "@/public/images/home/T4.webp";
import Hero1 from "@/public/images/hero/hero4.jpg";

const timeline = [
    {
        step: 1,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur  aut nam. Dignissimos a pariatur et quos omnis. Aspernatu aut nam. Dignissimos a pariatur et quos omnis. Aspernatu asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    {
        step: 2,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    {
        step: 3,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
];

const Hero = () => {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-white">
                <div className="mx-auto">
                    <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0 lg:mx-0 lg:max-w-none">
                        <div className="mx-auto my-auto w-full max-w-full py-16 pl-16 md:py-0 lg:max-w-2xl lg:flex-shrink">
                            <div className="hidden sm:mb-8 sm:flex">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Announcing our next round of funding.
                                    <a href="#" className="font-semibold text-black">
                                        <span
                                            className="absolute inset-0"
                                            aria-hidden="true"
                                        ></span>{" "}
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-5xl font-semibold md:text-6xl">
                                Data to enrich your online bussiness
                            </h1>
                            <p className="mt-6 text-base text-gray-600 lg:text-lg">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                            <div className="mt-10 flex gap-x-6">
                                <Button text="Get started" url={"#"} />
                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full justify-end sm:justify-start sm:gap-8 md:h-screen lg:max-w-full lg:gap-6">
                            <Image
                                src={Hero1}
                                alt="hero image 1"
                                priority={true}
                                className="aspect-video h-full w-full object-cover object-bottom md:aspect-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
