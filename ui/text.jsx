import React from 'react'

const S3 = () => {
    return (
        <section className="py-8  lg:py-16">
            <div className=' max-w-full md:max-w-[95%] mx-auto px-6  lg:px-8'>
            <div
                className="relative isolate overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-400"
                style={{
                    backgroundImage: "url('/images/hero/hero7.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    
                <div className="absolute z-[-9] h-full w-full bg-gradient-to-t from-black/30 to-black/40"></div>

                <div className="mx-auto flex flex-col text-center lg:text-left justify-between gap-y-5 px-6 py-20 md:gap-x-10 lg:flex-row lg:px-8">
                    <h2 className="text-4xl font-bold text-white sm:text-6xl">
                        Support center
                    </h2>
                    <p className="my-auto max-w-xl text-base text-gray-100 md:text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                        fugiat aliqua.
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default S3