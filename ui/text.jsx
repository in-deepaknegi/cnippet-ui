import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import H1 from "@/public/images/home/T1.webp";
import H2 from "@/public/images/home/T2.webp";
import H3 from "@/public/images/home/T3.webp";
import H4 from "@/public/images/home/T4.webp";

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
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="mx-auto grid gap-10 lg:grid-cols-12">
                        <div className=" lg:col-span-8">
                            <div className="bg-stripes-green h-[50vh] w-full rounded-2xl border"></div>
                        </div>

                        <div className=" lg:col-span-4">
                            <div className="bg-stripes-blue h-[50vh] w-full rounded-2xl border"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative isolate overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0 lg:mx-0 lg:max-w-none">
                        <div className="w-full max-w-full lg:max-w-sm lg:flex-shrink">
                            <div className="bg-stripes-blue h-[50vh] w-full rounded-2xl border"></div>
                        </div>

                        <div className="flex w-full justify-end sm:justify-start sm:gap-8 lg:max-w-full lg:gap-6">
                            <div className="bg-stripes-green h-[50vh] w-full rounded-2xl border"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
