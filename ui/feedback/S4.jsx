import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/profile/profile4.jpg";
import Hero2 from "@/public/images/profile/profile6.jpg";
import Hero3 from "@/public/images/profile/profile2.jpg";

const feedback = [
    {
        name: "Judith Black 1",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero1,
    },
    {
        name: "Judith Black 2",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolor.",
        social: "@judithblack",
        image: Hero2,
    },
    {
        name: "Judith Black 3",
        para: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        social: "@judithblack",
        image: Hero3,
    },
];
const Testimonial = () => {

    const data = [...feedback, ...feedback, ...feedback];

    return (
        <section className="relative isolate py-16 md:py-24">
            <div className="mx-auto px-8 gap-4 overflow-x-scroll">
                <div className="flex flex-row gap-8 animate-carousel">
                    {data.map((feed, i) => (
                        <figure
                            key={i}
                            className="pb-10 relative aspect-square h-[40vh] max-h-[275px] w-2/3 max-w-[700px] flex-none md:w-1/2"
                        >
                            <div className="h-full my-auto bg-gray-900 shadow-xl p-3 rounded-2xl">
                                <div className="my-4 flex flex-col items-center">
                                    <blockquote className="text-center text-xl text-white font-light sm:text-xl sm:leading-7">
                                        <p>{feed.para}</p>
                                    </blockquote>

                                    <figcaption className="mx-auto mt-4 flex justify-center">
                                        <Image
                                            src={feed.image}
                                            alt="profile-1"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div className="ml-5">
                                            <div className="text-lg text-white font-semibold">
                                                {feed.name}
                                            </div>
                                            <a
                                                href="#"
                                                className="text-sm tracking-wide font-semibold text-blue-500"
                                            >
                                                {feed.social}
                                            </a>
                                        </div>
                                    </figcaption>
                                </div>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
