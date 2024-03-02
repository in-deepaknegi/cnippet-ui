import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import components from '@/data/components';
import Layout from '@/components/Layout';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const Product = ({ params }: { params: { slug: string } }) => {
    const id = params.slug

    console.log(id)
    const _id = id;
    const component = components.find((component) => component.slug === _id)

    if (!component) {
        return <div>component Not Found</div>
    }

    return (
        <>
            <Navbar />
            <main>
            <section className="relative overflow-hidden pt-16 bg-white">
                    <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                                {component.name}
                            </h1>
                            <nav className="order-first flex space-x-2 text-base font-semibold">
                                <a href="/components" className="text-slate-500 hover:text-slate-600">
                                Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a href="/components/article" className="text-slate-500 hover:text-slate-600">
                                    {component.name}
                                </a>
                            </nav>
                        </div>

                        <Layout components={component.data} />

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Product