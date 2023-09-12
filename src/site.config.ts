import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "cooloo",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "小小前端一枚",
	// Meta property used as the default description meta property
	description: "小小前端，天天搬砖",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/blogs",
	},
	{
		title: "About",
		path: "/blogs/about/",
	},
	{
		title: "Blog",
		path: "/blogs/posts/",
	},
];
