import React from "react";

const Newsletter = () => {
    return (
        <section className="relative bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative isolate overflow-hidden">
                    <h2 className="mx-auto max-w-2xl md:text-center text-3xl font-bold tracking-wide text-dusk-800 sm:text-4xl">
                        Subscribe to our newsletter.
                    </h2>
                    <h2 className="mt-6 text-base md:text-center mx-auto max-w-3xl text-dusk-700">
                        Sign up for our newsletter today and be the first to get updates on
                        our newest products, as well as exclusive offers that are not
                        available anywhere else!
                    </h2>
                    <form
                        action=""
                        className="mt-6 md:mx-auto max-w-md col-span-5 lg:py-2"
                    >
                        <div className="flex gap-x-3">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-lg border-0 bg-dusk-300/10 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-dusk-700 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 bg-black text-sm text-white shadow-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
