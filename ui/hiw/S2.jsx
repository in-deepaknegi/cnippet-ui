import React from "react";

const timeline = [
    {
        step: 1,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    },
    {
        step: 2,
        title: "Voluptate repudiandae",
        para: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    },
    {
        step: 3,
        title: "Architecto nihil",
        para: "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    },
    {
        step: 4,
        title: "Geritecto velit",
        para: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    },
];

const S2 = () => {
    return (
        <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
            <div className="relative isolate flex flex-col lg:flex-row">
                <div className="max-w-2xl text-left">
                    <p className="text-base font-semibold leading-7 text-blue-700">
                        Get familiar with our process
                    </p>
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        How it works
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>
                </div>
                <div className="mt-16 max-w-2xl text-white lg:mt-0 lg:px-8">
                    <div className="mx-auto flex flex-col gap-y-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-2 md:gap-6">
                                <div className="items-center text-blue-700">
                                    <svg
                                        viewBox="0 0 4 4"
                                        className="mr-4 h-1 w-1 flex-none items-center mx-auto"
                                        aria-hidden="true"
                                    >
                                        <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                    </svg>
                                    <div className="mt-2 h-[90%] w-[2px] bg-blue-400 lg:static"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-blue-700">
                                        Step {item.step}
                                    </p>
                                    <p className="tracking- mt-3 text-lg font-semibold leading-8 text-gray-800">
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-[0.925rem] leading-6 text-gray-600">
                                        {item.para}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default S2;
