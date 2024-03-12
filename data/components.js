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
import N4 from '@/ui/navbar/S4';
import CN1 from '@/ui/navbar/C1.mdx';
import CN2 from '@/ui/navbar/C2.mdx';
import CN3 from '@/ui/navbar/C3.mdx';
import CN4 from '@/ui/navbar/C4.mdx';

import F1 from '@/ui/footer/S1';
import F2 from '@/ui/footer/S2';

import H1 from '@/ui/hero/S1'
import H2 from '@/ui/hero/S2'
import H3 from '@/ui/hero/S3'
import H4 from '@/ui/hero/S4'
import H5 from '@/ui/hero/S5'

import HE1 from '@/ui/header/S1'
import HE2 from '@/ui/header/S2'
import HE3 from '@/ui/header/S3'

import FE1 from '@/ui/feature/S1'
import FE2 from '@/ui/feature/S2'
import FL1 from '@/ui/feature-list/S1'
import FL2 from '@/ui/feature-list/S2'
import FL3 from '@/ui/feature-list/S3'

import FM1 from '@/ui/flyout-menu/S1'
import FM2 from '@/ui/flyout-menu/S2'
import FM3 from '@/ui/flyout-menu/S3'
import CFM1 from '@/ui/flyout-menu/C1.mdx'
import CFM2 from '@/ui/flyout-menu/C2.mdx'
import CFM3 from '@/ui/flyout-menu/C3.mdx'

import FED1 from '@/ui/feedback/S1'
import FED2 from '@/ui/feedback/S2'
import FED3 from '@/ui/feedback/S3'
import FED4 from '@/ui/feedback/S4'

import NL1 from '@/ui/newsletter/S1'
import NL2 from '@/ui/newsletter/S2'
import NL3 from '@/ui/newsletter/S3'
import NL4 from '@/ui/newsletter/S4'
import CNL1 from '@/ui/newsletter/C1.mdx'
import CNL2 from '@/ui/newsletter/C2.mdx'
import CNL3 from '@/ui/newsletter/C3.mdx'
import CNL4 from '@/ui/newsletter/C4.mdx'

import BL1 from '@/ui/blogs/S1';
import BL2 from '@/ui/blogs/S2';
import BL3 from '@/ui/blogs/S3';
import BL4 from '@/ui/blogs/S4';
import CBL1 from '@/ui/blogs/C1.mdx';
import CBL2 from '@/ui/blogs/C2.mdx';
import CBL3 from '@/ui/blogs/C3.mdx';
import CBL4 from '@/ui/blogs/C4.mdx';


const components = [
    {
        id: 1,
        slug: "navbar",
        name: "Navbar",
        desc: "Component description",
        source: "/components/navbar",
        image: Navbar,
        imgurl: '/images/components/navbar.png',
        number: "4 components",
        data: [
            {
                id: 1,
                title: 'Simple navbar 1',
                component: <N1 />,
                code: <CN1 />,
            },
            {
                id: 2,
                title: 'Simple navbar 2',
                component: <N2 />,
                code: <CN2 />,
            },
            {
                id: 3,
                title: 'Simple navbar 3',
                component: <N3 />,
                code: <CN3 />,
            },
            {
                id: 4,
                title: 'Simple sticky navbar 4',
                component: <N4 />,
                code: <CN4 />,
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
        number: "2 components",
        data: [
            {
                id: 1,
                title: 'Simple footer 1',
                component: <F1 />
            },
            {
                id: 2,
                title: 'Simple footer 2',
                component: <F2 />
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
        number: "5 components",
        data: [
            {
                id: 1,
                title: 'Simple hero 1',
                component: <H1 />
            },
            {
                id: 2,
                title: 'Simple hero 2',
                component: <H2 />
            },
            {
                id: 3,
                title: 'Simple hero 3',
                component: <H3 />
            },
            {
                id: 4,
                title: 'Simple hero 4',
                component: <H5 />
            },
            {
                id: 5,
                title: 'Simple hero 5',
                component: <H4 />
            },
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
                title: 'Simple header 1',
                component: <HE1 />
            },
            {
                id: 2,
                title: 'Simple header 2',
                component: <HE2 />
            },
            {
                id: 3,
                title: 'Simple header 2',
                component: <HE3 />
            },
        ]
    },
    {
        id: 5,
        slug: "feature",
        name: "Feature",
        desc: "Component description",
        source: "/components/feature",
        image: Feature,
        imgurl: '/images/components/feature.png',
        number: "2 components",
        data: [
            {
                id: 1,
                title: 'Simple header 1',
                component: <FE1 />
            },
            {
                id: 2,
                title: 'Simple header 2',
                component: <FE2 />
            },
        ]
    },
    {
        id: 6,
        slug: "feature-list",
        name: "Feature List",
        desc: "Component description",
        source: "/components/feature-list",
        image: FeatureList,
        imgurl: '/images/components/feature-list.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'Simple feature list 1',
                component: <FL1 />
            },
            {
                id: 2,
                title: 'Simple feature list 2',
                component: <FL2 />
            },
            {
                id: 3,
                title: 'Simple feature list 2',
                component: <FL3 />
            },
        ]
    },
    {
        id: 7,
        slug: "flyout-menu",
        name: "Flyout Menu",
        desc: "Component description",
        source: "/components/flyout-menu",
        image: Navbar,
        imgurl: '/images/components/feature-list.png',
        number: "3 components",
        data: [
            {
                id: 1,
                title: 'Simple fly-out menu 1',
                component: <FM1 />,
                code: <CFM1 />
            },
            {
                id: 2,
                title: 'Simple fly-out menu 2',
                component: <FM2 />,
                code: <CFM2 />
            },
            {
                id: 3,
                title: 'Simple fly-out menu 3',
                component: <FM3 />,
                code: <CFM3 />
            },
        ]
    },
    {
        id: 8,
        slug: "feedback",
        name: "Feedback",
        desc: "Component description",
        source: "/components/feedback",
        image: Feedback,
        imgurl: '/images/components/feadback.png',
        number: "4 components",
        data: [
            {
                id: 1,
                title: 'Simple feedback 1',
                component: <FED1 />,
            },
            {
                id: 2,
                title: 'Simple feedback 2',
                component: <FED2 />,
            },
            {
                id: 3,
                title: 'Simple feedback 3',
                component: <FED3 />,
            },
            {
                id: 4,
                title: 'Simple feedback 4',
                component: <FED4 />,
            },
        ]
    },
    {
        id: 9,
        slug: "newsletter",
        name: "Newsletter",
        desc: "Component description",
        source: "/components/newsletter",
        image: Newsletter,
        imgurl: '/images/components/newsletter.png',
        number: "4 components",
        data: [
            {
                id: 1,
                title: 'Simple newsletter 1',
                component: <NL1 />,
                code: <CNL1 />
            },
            {
                id: 2,
                title: 'Simple newsletter 2',
                component: <NL2 />,
                code: <CNL2 />
            },
            {
                id: 3,
                title: 'Simple newsletter 3',
                component: <NL3 />,
                code: <CNL3 />
            },
            {
                id: 3,
                title: 'Simple newsletter 3',
                component: <NL4 />,
                code: <CNL4 />
            },
        ]
    },
    {
        id: 10,
        slug: "blogs",
        name: "Blogs",
        desc: "Component description",
        source: "/components/blogs",
        image: Blogs,
        imgurl: '/images/components/blogs.png',
        number: "4 components",
        data: [
            {
                id: 1,
                title: 'Simple blog 1',
                component: <BL1 />,
                code: <CBL1/>
            },
            {
                id: 2,
                title: 'Simple blog 2',
                component: <BL2 />,
                code: <CBL2/>
            },
            {
                id: 3,
                title: 'Simple blog 3',
                component: <BL3 />,
                code: <CBL3/>
            },
            {
                id: 1,
                title: 'Simple blog 4',
                component: <BL4 />,
                code: <CBL4/>
            },
        ]
    },

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