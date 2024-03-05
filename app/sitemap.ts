import { MetadataRoute } from "next";
import components from "@/data/components";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
    const entries: MetadataRoute.Sitemap = components.map(({ slug }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/components/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...entries,
    ]
}