import Navbar from "@/public/images/components/navbar.png";
import Footer from "@/public/images/components/footer.png";
import Hero from "@/public/images/components/hero.png";
import Header from "@/public/images/components/header.png";
import Feature from "@/public/images/components/feature.png";
import FeatureList from "@/public/images/components/feature-list.png";
import Feedback from "@/public/images/components/feedback.png";
import Newsletter from "@/public/images/components/newsletter.png";
import Article from "@/public/images/components/article.png";
import Blogs from "@/public/images/components/blogs.png";

import N1 from "@/ui/navbar/S1";
import N2 from "@/ui/navbar/S2";
import N3 from "@/ui/navbar/S3";
import N4 from "@/ui/navbar/S4";
import CN1 from "@/ui/navbar/C1.mdx";
import CN2 from "@/ui/navbar/C2.mdx";
import CN3 from "@/ui/navbar/C3.mdx";
import CN4 from "@/ui/navbar/C4.mdx";

import F1 from "@/ui/footer/S1";
import F2 from "@/ui/footer/S2";
import CF1 from "@/ui/footer/C1.mdx";

import H1 from "@/ui/hero/S1";
import H2 from "@/ui/hero/S2";
import H3 from "@/ui/hero/S3";
import H4 from "@/ui/hero/S4";
import H5 from "@/ui/hero/S5";
import CH1 from "@/ui/hero/C1.mdx";
import CH2 from "@/ui/hero/C2.mdx";

import HE1 from "@/ui/header/S1";
import HE2 from "@/ui/header/S2";
import HE3 from "@/ui/header/S3";
import CHE1 from "@/ui/header/C1.mdx";

import FE1 from "@/ui/feature/S1";
import FE2 from "@/ui/feature/S2";
import CFE1 from "@/ui/feature/C1.mdx";
import CFE2 from "@/ui/feature/C2.mdx";

import FL1 from "@/ui/feature-list/S1";
import FL2 from "@/ui/feature-list/S2";
import FL3 from "@/ui/feature-list/S3";
import CFL1 from "@/ui/feature-list/C1.mdx";

import FM1 from "@/ui/flyout-menu/S1";
import FM2 from "@/ui/flyout-menu/S2";
import FM3 from "@/ui/flyout-menu/S3";
import CFM1 from "@/ui/flyout-menu/C1.mdx";
import CFM2 from "@/ui/flyout-menu/C2.mdx";
import CFM3 from "@/ui/flyout-menu/C3.mdx";

import FED1 from "@/ui/feedback/S1";
import FED2 from "@/ui/feedback/S2";
import FED3 from "@/ui/feedback/S3";
import FED4 from "@/ui/feedback/S4";
import CFED1 from "@/ui/feedback/C1.mdx";

import NL1 from "@/ui/newsletter/S1";
import NL2 from "@/ui/newsletter/S2";
import NL3 from "@/ui/newsletter/S3";
import NL4 from "@/ui/newsletter/S4";
import CNL1 from "@/ui/newsletter/C1.mdx";
import CNL2 from "@/ui/newsletter/C2.mdx";
import CNL3 from "@/ui/newsletter/C3.mdx";
import CNL4 from "@/ui/newsletter/C4.mdx";

import BL1 from "@/ui/blogs/S1";
import BL2 from "@/ui/blogs/S2";
import BL3 from "@/ui/blogs/S3";
import BL4 from "@/ui/blogs/S4";
import CBL1 from "@/ui/blogs/C1.mdx";
import CBL2 from "@/ui/blogs/C2.mdx";
import CBL3 from "@/ui/blogs/C3.mdx";
import CBL4 from "@/ui/blogs/C4.mdx";

import PR1 from "@/ui/pricing/S1";
import PR2 from "@/ui/pricing/S2";
import CPR1 from "@/ui/pricing/C1.mdx";

import HI1 from "@/ui/hiw/S1";
import HI2 from "@/ui/hiw/S2";
import CHI1 from "@/ui/hiw/C1.mdx";
import CHI2 from "@/ui/hiw/C2.mdx";

import CON1 from '@/ui/container/S1';
import CON2 from '@/ui/container/S2';
import CCON1 from '@/ui/container/C1.mdx';
import CCON2 from '@/ui/container/C2.mdx';

const components = [
    {
        slug: "navbar",
        name: "Navbar",
        desc: "Component description",
        image: Navbar,
        imgurl: "/images/components/navbar.png",
        number: "4 components",
        data: [
            {
                title: "Simple navbar 1",
                component: <N1 />,
                code: <CN1 />,
            },
            {
                title: "Simple navbar 2",
                component: <N2 />,
                code: <CN2 />,
            },
            {
                title: "Simple navbar 3",
                component: <N3 />,
                code: <CN3 />,
            },
            {
                title: "Simple sticky navbar 4",
                component: <N4 />,
                code: <CN4 />,
            },
        ],
    },
    {
        slug: "footer",
        name: "Footer",
        desc: "Component description",
        image: Footer,
        imgurl: "/images/components/footer.png",
        number: "2 components",
        data: [
            {
                title: "Simple footer 1",
                component: <F1 />,
                code: <CF1 />,
            },
            {
                title: "Simple footer 2",
                component: <F2 />,
            },
        ],
    },
    {
        slug: "hero",
        name: "Hero",
        desc: "Component description",
        image: Hero,
        imgurl: "/images/components/hero.png",
        number: "5 components",
        data: [
            {
                title: "Simple hero 1",
                component: <H1 />,
                code: <CH1 />,
            },
            {
                title: "Simple hero 2",
                component: <H2 />,
                code: <CH2 />,
            },
            {
                title: "Simple hero 3",
                component: <H3 />,
            },
            {
                title: "Simple hero 4",
                component: <H5 />,
            },
            {
                title: "Simple hero 5",
                component: <H4 />,
            },
        ],
    },
    {
        slug: "header",
        name: "Header",
        desc: "Component description",
        image: Header,
        imgurl: "/images/components/header.png",
        number: "3 components",
        data: [
            {
                title: "Simple header 1",
                component: <HE1 />,
                code: <CHE1 />,
            },
            {
                title: "Simple header 2",
                component: <HE2 />,
            },
            {
                title: "Simple header 2",
                component: <HE3 />,
            },
        ],
    },
    {
        slug: "feature",
        name: "Feature",
        desc: "Component description",
        image: Feature,
        imgurl: "/images/components/feature.png",
        number: "2 components",
        data: [
            {
                title: "Simple header 1",
                component: <FE1 />,
                code: <CFE1 />,
            },
            {
                title: "Simple header 2",
                component: <FE2 />,
                code: <CFE2 />,
            },
        ],
    },
    {
        slug: "feature-list",
        name: "Feature List",
        desc: "Component description",
        image: FeatureList,
        imgurl: "/images/components/feature-list.png",
        number: "3 components",
        data: [
            {
                title: "Simple feature list 1",
                component: <FL1 />,
                code: <CFL1 />,
            },
            {
                title: "Simple feature list 2",
                component: <FL2 />,
            },
            {
                title: "Simple feature list 2",
                component: <FL3 />,
            },
        ],
    },
    {
        slug: "flyout-menu",
        name: "Flyout Menu",
        desc: "Component description",
        image: Navbar,
        imgurl: "/images/components/feature-list.png",
        number: "3 components",
        data: [
            {
                title: "Simple fly-out menu 1",
                component: <FM1 />,
                code: <CFM1 />,
            },
            {
                title: "Simple fly-out menu 2",
                component: <FM2 />,
                code: <CFM2 />,
            },
            {
                title: "Simple fly-out menu 3",
                component: <FM3 />,
                code: <CFM3 />,
            },
        ],
    },
    {
        slug: "feedback",
        name: "Feedback",
        desc: "Component description",
        image: Feedback,
        imgurl: "/images/components/feadback.png",
        number: "4 components",
        data: [
            {
                title: "Simple feedback 1",
                component: <FED1 />,
                code: <CFED1 />,
            },
            {
                title: "Simple feedback 2",
                component: <FED2 />,
            },
            {
                title: "Simple feedback 3",
                component: <FED3 />,
            },
            {
                title: "Simple feedback 4",
                component: <FED4 />,
            },
        ],
    },
    {
        slug: "newsletter",
        name: "Newsletter",
        desc: "Component description",
        image: Newsletter,
        imgurl: "/images/components/newsletter.png",
        number: "4 components",
        data: [
            {
                title: "Simple newsletter 1",
                component: <NL1 />,
                code: <CNL1 />,
            },
            {
                title: "Simple newsletter 2",
                component: <NL2 />,
                code: <CNL2 />,
            },
            {
                title: "Simple newsletter 3",
                component: <NL3 />,
                code: <CNL3 />,
            },
            {
                title: "Simple newsletter 3",
                component: <NL4 />,
                code: <CNL4 />,
            },
        ],
    },
    {
        slug: "blogs",
        name: "Blogs",
        desc: "Component description",
        image: Blogs,
        imgurl: "/images/components/blogs.png",
        number: "4 components",
        data: [
            {
                title: "Simple blog 1",
                component: <BL1 />,
                code: <CBL1 />,
            },
            {
                title: "Simple blog 2",
                component: <BL2 />,
                code: <CBL2 />,
            },
            {
                title: "Simple blog 3",
                component: <BL3 />,
                code: <CBL3 />,
            },
            {
                title: "Simple blog 4",
                component: <BL4 />,
                code: <CBL4 />,
            },
        ],
    },
    {
        slug: "pricing",
        name: "Pricing",
        desc: "Component description",
        image: Blogs,
        imgurl: "/images/components/blogs.png",
        number: "4 components",
        data: [
            {
                title: "Simple blog 1",
                component: <PR1 />,
                code: <CPR1 />,
            },
            {
                title: "Simple blog 2",
                component: <PR2 />,
            },
        ],
    },
    {
        slug: "hiw",
        name: "How it works",
        desc: "Component description",
        image: Blogs,
        imgurl: "/images/components/blogs.png",
        number: "4 components",
        data: [
            {
                title: "Simple how-it-works 1",
                component: <HI1 />,
                code: <CHI1 />,
            },
            {
                title: "Simple how-it-works 2",
                component: <HI2 />,
                code: <CHI2 />,
            },
        ],
    },
    {
        slug: "container",
        name: "Container",
        desc: "Component description",
        image: Blogs,
        imgurl: "/images/components/blogs.png",
        number: "4 components",
        data: [
            {
                title: "Simple container using grid",
                component: <CON1 />,
                code: <CCON1 />,
            },
            {
                title: "Simple conatiner using flex",
                component: <CON2 />,
                code: <CCON2 />,
            },
        ],
    },
    //container
    // stats
    // contact section
    // team section
    // logo
    // faq
    // sidebar
    // modals
    // Hiw
    // article
];

export default components;
