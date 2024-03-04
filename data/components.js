import Navbar from "@/public/images/components/navbar.png";
import Footer from '@/public/images/components/footer.png';
import Hero from '@/public/images/components/hero.png';
import Header from '@/public/images/components/header.png';
import Feature from '@/public/images/components/feature.png';
import FeatureList from '@/public/images/components/feature-list.png';
import Feedback from '@/public/images/components/feedback.png';
import Newsletter from '@/public/images/components/newsletter.png';
import Article from '@/public/images/components/article.png';
import Blogs from '@/public/images/components/blogs.png'

import N1 from '@/ui/navbar/S1';
import N2 from '@/ui/navbar/S2';
import N3 from '@/ui/navbar/S3';
import CN1 from '@/ui/navbar/C1.mdx';

import H1 from '@/ui/hero/S1'

const components = [
    {
        id: 1,
        slug: "navbar",
        name: "Navbar",
        desc: "Component description",
        source: "/components/navbar",
        image: Navbar,
        imgurl: '/images/components/navbar.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'simple navbar 1',
                component: <N1 />,
                code: <CN1 />
            },
            {
                id: 2,
                title: 'simple navbar 2',
                component: <N2 />
            },
            {
                id: 3,
                title: 'simple navbar 3',
                component: <N3 />
            }
        ]
    },
    {
        id: 2,
        slug: "footer",
        name: "Footer",
        desc: "Component description",
        source: "/components/footer",
        image: Footer,
        imgurl: '/images/components/footer.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'simple footer 1',
                component: <H1 />
            },
            {
                id: 2,
                title: 'simple footer 2',
                component: <H1 />
            }
        ]
    },
    {
        id: 3,
        slug: "hero",
        name: "Hero",
        desc: "Component description",
        source: "/components/hero",
        image: Hero,
        imgurl: '/images/components/hero.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'simple hero 1',
                component: <H1 />
            },
            {
                id: 2,
                title: 'simple hero 2',
                component: <H1 />
            }
        ]
    },
    {
        id: 4,
        slug: "header",
        name: "Header",
        desc: "Component description",
        source: "/components/header",
        image: Header,
        imgurl: '/images/components/header.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'simple header 1',
                component: <H1 />
            },
            {
                id: 2,
                title: 'simple header 2',
                component: <H1 />
            }
        ]
    },
    // {
    //     id: 4,
    //     name: "Header",
    //     source: "/components/header",
    //     imageURL: Header,
    //     number: "3 components",
    // },
    // {
    //     id: 5,
    //     name: "Feature",
    //     source: "/components/feature",
    //     imageURL: Feature,
    //     number: "4 components",
    // },
    // {
    //     id: 6,
    //     name: "Feature List",
    //     source: "/components/feature-list",
    //     imageURL: FeatureList,
    //     number: "3 components",
    // },
    // {
    //     id: 7,
    //     name: "Feedback",
    //     source: "/components/feedback",
    //     imageURL: Feedback,
    //     number: "3 components",
    // },
    // {
    //     id: 8,
    //     name: "Newsletter",
    //     source: "/components/newsletter",
    //     imageURL: Newsletter,
    //     number: "3 components",
    // },
    // {
    //     id: 9,
    //     name: "Blog",
    //     source: "/components/blog",
    //     imageURL: Blogs,
    //     number: "3 components",
    // },
    // {
    //     id: 10,
    //     name: "Pricing",
    //     source: "/components/pricing",
    //     imageURL: Blogs,
    //     number: "2 components",
    // },
    // {
    //     id: 11,
    //     name: "Faq",
    //     source: "/components/faq",
    //     imageURL: Blogs,
    //     number: "2 components",
    // },
    // {
    //     id: 12,
    //     name: "Article",
    //     source: "/components/article",
    //     imageURL: Article,
    //     number: "3 components",
    // },
];

export default components