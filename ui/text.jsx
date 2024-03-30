import React from 'react'
import Image from 'next/image';

import H1 from "@/public/images/hero/hero8.jpg";
import Hero from './hero/S5';

const features = [
    {
        name: "Push to deploy",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
        name: "Push to deploy",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    // add more data here ...
];

const stack = () => {
    return (
        <aside className='py-20 gap-y-16 flex flex-col'>
            <div className='sticky top-6 p-10 border max-w-7xl rounded-2xl mx-auto bg-blue-400/50'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                        <div className="order-last max-w-full lg:order-first">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Everything you need to deploy your app
                            </h2>
                            <p className="mt-6 text-base text-gray-700 md:text-lg">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                                at. In mi viverra elit nunc.
                            </p>

                            <ul className="ml-5 mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-700 lg:max-w-none">
                                {features.map((feature, i) => (
                                    <li key={i} className="list-disc">
                                        <span className="font-semibold text-black">
                                            {feature.name}:{" "}
                                        </span>
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                                >
                                    Discover more
                                </a>
                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Join us <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative order-first mx-auto lg:max-w-[40%] lg:order-last">
                            <Image
                                src={H1}
                                alt="Product screenshot"
                                quality={100}
                                loading="eager"
                                className="h-full w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='sticky top-16 z-20 p-10 border max-w-7xl rounded-2xl mx-auto bg-emerald-500'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                        <div className="order-last max-w-full lg:order-first">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Everything you need to deploy your app
                            </h2>
                            <p className="mt-6 text-base text-gray-700 md:text-lg">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                                at. In mi viverra elit nunc.
                            </p>

                            <ul className="ml-5 mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-700 lg:max-w-none">
                                {features.map((feature, i) => (
                                    <li key={i} className="list-disc">
                                        <span className="font-semibold text-black">
                                            {feature.name}:{" "}
                                        </span>
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                                >
                                    Discover more
                                </a>
                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Join us <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative order-first mx-auto lg:max-w-[40%] lg:order-last">
                            <Image
                                src={H1}
                                alt="Product screenshot"
                                quality={100}
                                loading="eager"
                                className="h-full w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='sticky top-28 z-20 p-10 border max-w-7xl rounded-2xl mx-auto bg-emerald-500'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                        <div className="order-last max-w-full lg:order-first">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Everything you need to deploy your app
                            </h2>
                            <p className="mt-6 text-base text-gray-700 md:text-lg">
                                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                                at. In mi viverra elit nunc.
                            </p>

                            <ul className="ml-5 mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-700 lg:max-w-none">
                                {features.map((feature, i) => (
                                    <li key={i} className="list-disc">
                                        <span className="font-semibold text-black">
                                            {feature.name}:{" "}
                                        </span>
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                                >
                                    Discover more
                                </a>
                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Join us <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative order-first mx-auto lg:max-w-[40%] lg:order-last">
                            <Image
                                src={H1}
                                alt="Product screenshot"
                                quality={100}
                                loading="eager"
                                className="h-full w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' h-screen bg-white relative z-50'>

            </div>
        </aside>
    )
}

export default stack