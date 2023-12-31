"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Profile1 from '@/public/profile1.jpg'
import Profile2 from '@/public/profile2.jpg'
import Profile3 from '@/public/profile3.jpg'
import Profile4 from '@/public/profile4.jpg'
import Profile5 from '@/public/profile5.jpg'
import Profile6 from '@/public/profile6.jpg'


const Hero = () => {
    const [activeTab0, setActiveTab0] = useState(0);
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);
    const [activeTab4, setActiveTab4] = useState(0);

    const changeTab0 = (index) => {
        setActiveTab0(index);
    };
    const changeTab1 = (index) => {
        setActiveTab1(index);
    };
    const changeTab2 = (index) => {
        setActiveTab2(index);
    };
    const changeTab3 = (index) => {
        setActiveTab3(index);
    };
    const changeTab4 = (index) => {
        setActiveTab4(index);
    };

    return (
        <section className='relative overflow-hidden pt-[5.75rem]'>
            <div className='relative mx-auto mt-20 w-full px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col'>
                    <h1 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-900'>Testimonials</h1>
                    <nav className='order-first flex space-x-2 text-sm font-semibold'>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Application UI
                        </a>
                        <div className='select-none text-slate-400'>/</div>
                        <a href="/" className='text-slate-500 hover:text-slate-600'>
                            Testimonials
                        </a>
                    </nav>
                </div>
                <div className='mt-10 space-y-28 pb-px'>
                    <section id='testimonial-0'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu and button on right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab0(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab0 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab0(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab0 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab0 === 0 ? (
                                    <>
                                        <section className='isolate overflow-hidden bg-white border rounded-2xl px-6 lg:px-8'>
                                            <div className='relative mx-auto max-w-xl py-16 sm:py-24 lg:max-w-2xl'>
                                                <figure className='items-center gap-8'>
                                                    <div className='col-span-2 font-sans'>
                                                        <div className='relative'>
                                                            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-32 z-[-10] top-[-3rem] stroke-slate-300'>
                                                                <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                                                </path>
                                                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                                            </svg>
                                                            <blockquote className='text-xl text-center sm:text-2xl sm:leading-8 text-gray-900'>
                                                                <p>
                                                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                                                </p>
                                                            </blockquote>
                                                        </div>

                                                        <figcaption className='mt-8 flex mx-auto justify-center'>
                                                            <Image
                                                                src={Profile4}
                                                                alt='profile-1'
                                                                className='w-12 h-12 object-cover rounded-full'
                                                            />
                                                            <div className='ml-5'>
                                                                <div className='text-lg font-semibold'>
                                                                    Judith Black
                                                                </div>
                                                                <div className='text-gray-700'>
                                                                    CEO of CodeCnippet
                                                                </div>
                                                            </div>
                                                            <div className='h-10 bg-gray-400 w-[1px] mx-3 my-auto'></div>
                                                            <div className='flex my-auto'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-200'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                        </figcaption>
                                                    </div>
                                                </figure>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='testimonial-1'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu and button on right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab1(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab1(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab1 === 0 ? (
                                    <>
                                        <section className='isolate overflow-hidden bg-white border rounded-2xl px-6 lg:px-8'>
                                            <div className='relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl'>
                                                <figure className='grid grid-cols-3 items-center gap-8'>
                                                    <div className='w-16 lg:w-72'>
                                                        <Image
                                                            src={Profile6}
                                                            alt='profile 1'
                                                            className='w-full h-auto rounded-full aspect-[1/1] object-cover'
                                                        />
                                                    </div>
                                                    <div className='col-span-2 font-sans'>
                                                        <div className='relative'>
                                                            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-32 z-[-10] top-[-3rem] stroke-slate-300'>
                                                                <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                                                </path>
                                                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                                            </svg>
                                                            <blockquote className='text-xl font-semibold sm:text-2xl sm:leading-8 text-gray-600'>
                                                                <p>
                                                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                                                </p>
                                                            </blockquote>
                                                        </div>

                                                        <figcaption className='mt-8'>
                                                            <div className='text-lg font-semibold'>
                                                                Judith Black
                                                            </div>
                                                            <div className='text-gray-700'>
                                                                CEO of CodeCnippet
                                                            </div>
                                                        </figcaption>
                                                    </div>
                                                </figure>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='testimonial-2'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu in center and button in right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab2(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab2 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab2(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab2 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab2 === 0 ? (
                                    <>
                                        <section className='isolate overflow-hidden bg-white border rounded-2xl px-6 lg:px-8'>
                                            <div className='relative mx-auto max-w-2xl bg-black rounded-3xl my-16 sm:my-24 lg:max-w-6xl'>
                                                <figure className='grid grid-cols-3 items-center gap-8 py-20 px-4'>
                                                    <div className='static w-16 lg:w-72'>
                                                        <Image
                                                            src={Profile1}
                                                            alt='profile 1'
                                                            className='absolute w-[25%] top-[-1.5rem] left-[2rem] object-cover rounded-3xl shadow-xl shadow-gray-600'
                                                        />
                                                    </div>
                                                    <div className='col-span-2 font-sans z-10'>
                                                        <div className='relative'>
                                                            <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-32 z-[-10] top-[-3rem] stroke-slate-500'>
                                                                <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                                                </path>
                                                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                                            </svg>
                                                            <blockquote className='text-xl sm:text-2xl sm:leading-8 text-gray-200'>
                                                                <p>
                                                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                                                </p>
                                                            </blockquote>
                                                        </div>

                                                        <figcaption className='mt-8'>
                                                            <div className='text-lg font-semibold text-gray-200'>
                                                                Judith Black
                                                            </div>
                                                            <div className='text-gray-400'>
                                                                CEO of CodeCnippet
                                                            </div>
                                                        </figcaption>
                                                    </div>
                                                </figure>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='testimonial-3'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple navbar with menu of left and button on right
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab3(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab3 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab3(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab3 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab3 === 0 ? (
                                    <>
                                        <section className='relative isolate bg-white py-16 lg:py-10 border rounded-2xl'>
                                            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                                                <div className='mx-auto max-w-xl text-center'>
                                                    <h2 className='text-2xl text-blue-700 font-semibold'>Testimonials</h2>
                                                    <p className='mt-4 text-4xl font-medium'>We have worked with thousands of amazing people</p>
                                                </div>
                                                <div className='mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3'>
                                                    <div className='space-y-8'>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile1}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Leslie Alexander</div>
                                                                    <div className='text-gray-600'>@lesliealexander</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile2}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Lindsay Walton</div>
                                                                    <div className='text-gray-600'>@lindsaywalton</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>

                                                    </div>
                                                    <div className='space-y-8'>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile3}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Emily Selman</div>
                                                                    <div className='text-gray-600'>@emilyselman</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile4}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Floyd Miles</div>
                                                                    <div className='text-gray-600'>@floydmiles</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>

                                                    </div>
                                                    <div className='space-y-8'>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile5}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Leonard Kras</div>
                                                                    <div className='text-gray-600'>@leonardkras</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                        <figure className='rounded-lg bg-gray-50 p-6 shadow-xl ring-1 ring-gray-200'>
                                                            <blockquote className='text-sm text-gray-700'>
                                                                <p>
                                                                    &quot;Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.&quot;
                                                                </p>
                                                            </blockquote>
                                                            <figcaption className='mt-6 flex items-center gap-6'>
                                                                <Image
                                                                    src={Profile6}
                                                                    alt='profile-1 photo'
                                                                    className='w-10 h-10 rounded-full object-cover'
                                                                />
                                                                <div className='text-sm'>
                                                                    <div className='font-semibold text-gray-800'>Catthy Mueller</div>
                                                                    <div className='text-gray-600'>@catthymueller</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>

                    <section id='testimonial-4'>
                        <div className='grid grid-cols-[1fr,auto] items-center'>
                            <div className='flex min-w-0'>
                                <h2 className='truncate text-base font-medium leading-7 text-slate-900'>
                                    <a href="">
                                        Simple Testimonial section with autoplay
                                    </a>
                                </h2>
                                <p className='ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block'>
                                    Requires JS
                                </p>
                            </div>
                            <div className='ml-6 flex items-center'>
                                <div className='flex space-x-1 rounded-lg bg-slate-100 p-0.5'>
                                    <button
                                        onClick={() => changeTab4(0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab4 === 0 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0950f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Preview</span>
                                    </button>
                                    <button
                                        onClick={() => changeTab4(1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab4 === 1 ? 'bg-white shadow' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3e75f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                        <span className='sr-only lg:not-sr-only lg:ml-2 text-stone-900'>Code</span>
                                    </button>
                                </div>
                                <div className='ml-6 mr-3 hidden h-5 w-px bg-slate-900 sm:block'></div>
                                <div className='relative hidden sm:block text-slate-900 font-medium sm:text-sm pl-3.5 pr-[1.875rem]'>
                                    NextJs
                                </div>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </div>

                            <div className='col-span-2 row-start-2 min-w-0 mt-3'>
                                {activeTab4 === 0 ? (
                                    <>
                                        <section className='border rounded-2xl h-[30rem]'>
                                            <Swiper
                                                spaceBetween={30}
                                                // effect={'fade'}
                                                direction={'vertical'}
                                                loop={true}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={false}
                                                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                                                className="h-full w-full"
                                            >
                                                <SwiperSlide>
                                                    <section className='isolate overflow-hidden px-6 lg:px-8'>
                                                        <div className='relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl'>
                                                            <figure className='grid grid-cols-3 items-center gap-8'>
                                                                <div className='w-16 lg:w-72'>
                                                                    <Image
                                                                        src={Profile6}
                                                                        alt='profile 1'
                                                                        className='w-full h-auto rounded-full aspect-[1/1] object-cover'
                                                                    />
                                                                </div>
                                                                <div className='col-span-2 font-sans'>
                                                                    <div className='relative'>
                                                                        <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-32 z-[-10] top-[-3rem] stroke-slate-300'>
                                                                            <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                                                            </path>
                                                                            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                                                        </svg>
                                                                        <blockquote className='text-xl font-semibold sm:text-2xl sm:leading-8 text-gray-600'>
                                                                            <p>
                                                                                Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                                                            </p>
                                                                        </blockquote>
                                                                    </div>

                                                                    <figcaption className='mt-8'>
                                                                        <div className='text-lg font-semibold'>
                                                                            Judith Black
                                                                        </div>
                                                                        <div className='text-gray-700'>
                                                                            CEO of CodeCnippet
                                                                        </div>
                                                                    </figcaption>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </section>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <section className='isolate overflow-hidden px-6 lg:px-8'>
                                                        <div className='relative mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-5xl'>
                                                            <figure className='grid grid-cols-3 items-center gap-8'>
                                                                <div className='w-16 lg:w-72'>
                                                                    <Image
                                                                        src={Profile4}
                                                                        alt='profile 1'
                                                                        className='w-full h-auto rounded-full aspect-[1/1] object-cover'
                                                                    />
                                                                </div>
                                                                <div className='col-span-2 font-sans'>
                                                                    <div className='relative'>
                                                                        <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-32 z-[-10] top-[-3rem] stroke-slate-300'>
                                                                            <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                                                            </path>
                                                                            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                                                        </svg>
                                                                        <blockquote className='text-xl font-semibold sm:text-2xl sm:leading-8 text-gray-600'>
                                                                            <p>
                                                                                Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                                                            </p>
                                                                        </blockquote>
                                                                    </div>

                                                                    <figcaption className='mt-8'>
                                                                        <div className='text-lg font-semibold'>
                                                                            Judith Black
                                                                        </div>
                                                                        <div className='text-gray-700'>
                                                                            CEO of CodeCnippet
                                                                        </div>
                                                                    </figcaption>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </section>
                                                </SwiperSlide>

                                            </Swiper>
                                        </section>
                                    </>
                                ) : (
                                    <div>code</div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Hero