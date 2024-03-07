"use client"
import React, { useState } from 'react';
import { ChevronDown, PieChart } from 'lucide-react';
import H1 from '@/public/images/hero/hero11.jpg';
import Image from 'next/image';

const menu = [
    {
        title: "Solution",
        solutions: [
            {
                name: 'Analytics',
                description: 'Get a better understanding of your traffic',
                href: '#',
                icon: PieChart,
            },
            {
                name: 'Analytics',
                description: 'Get a better understanding of your traffic',
                href: '#',
                icon: PieChart,
            },
        ]
    },
    {
        title: "Analytics",
        solutions: [
            {
                name: 'Analytsdfsdfics',
                description: 'Get a bsfsdfetter understanding of your traffic',
                href: '#',
                icon: PieChart,
            },
            {
                name: 'Analysdfsdtics',
                description: 'Get asdfsdbetter understanding of your traffic',
                href: '#',
                icon: PieChart,
            },
        ]
    }
];

const S1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <header className='relative isolate py-8 md:pb-64 overflow-visible'>
            <div className='relative flex justify-between max-w-md ml-40'>
                {menu.map((item, index) => (
                    <div className='relative hidden lg:flex lg:gap-x-12' key={index}>
                        <button
                            onMouseEnter={() => toggleOpen(index)}
                            onMouseLeave={() => toggleOpen(index)}
                            className="inline-flex justify-center items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <span>{item.title}</span>
                            <ChevronDown className="h-5 w-5" aria-hidden="true" />

                            {openIndex === index && (
                                <div className="absolute -left-5 z-10 mt-5 top-1 pt-2 flex w-screen max-w-max px-4">
                                    <div className="w-screen max-w-[38rem] flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-2 flex flex-row space-x-3">
                                            <Image
                                                src={H1}
                                                alt='dfs'
                                                className='w-[15rem] rounded-2xl object-cover'
                                            />
                                            <div className="p-2 flex flex-col space-y-1">
                                                {item.solutions.map((solution, solutionIndex) => (
                                                    <div key={solutionIndex} className="group relative flex rounded-lg py-2 px-4 hover:bg-gray-50">
                                                        <div>
                                                            <a href={solution.href} className="font-semibold text-base text-gray-900">
                                                                {solution.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-gray-600">{solution.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default S1;
