'use client'
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import Button from '@/components/ui/SwiperButton';

import posts from '@/data/constants/blogs';

const Blog2 = () => {

    return (
        <section className="relative isolate bg-white py-16 md:py-24">
            <div className="mx-auto relative max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="relative">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper pt-10"
                    >
                        <Button />
                        
                        {posts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <article className="flex flex-col items-start mt-16">
                                    <div className="relative w-full">
                                        <Image
                                            src={post.img}
                                            alt="post-img"
                                            className="aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                        />
                                        <div className="absolute inset-0 rounded-2xl shadow-xl ring-inset ring-gray-100"></div>
                                    </div>
                                    <div className="mt-6 max-w-xl">
                                        <div className="relative">
                                            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                                {post.description}
                                            </p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            <Image
                                                src={post.author.imageUrl}
                                                alt="id-1"
                                                className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                                            />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">{post.author.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>   
                </div>
            </div>
        </section>
    );
};

export default Blog2;
