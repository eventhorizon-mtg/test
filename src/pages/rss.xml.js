import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Sito Astro - Blog',
    description: 'Articoli pubblicati nel blog',
    site: context.site, // usa astro.config.mjs -> site
    items: posts
      .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/posts/${p.slug}/`,
      })),
  });
}

