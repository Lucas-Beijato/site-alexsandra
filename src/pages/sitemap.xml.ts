import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const GET: APIRoute = async (request) => {

  const posts = await getCollection('canvases');
  let urls_gallery: Array<string> = []
  let urls_for_sale: Array<string> = []

  posts.forEach((canva) => {
    if (!canva.data.for_sale) {
      urls_gallery.push(`<url><loc>${request.url.origin}/galeria/${canva.data.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`)
    }
    if (canva.data.for_sale) {
      urls_for_sale.push(`<url><loc>${request.url.origin}/a_venda/${canva.data.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`)
    }
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${request.url.origin}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
    <url><loc>${request.url.origin}/sobre</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
    <url><loc>${request.url.origin}/contato</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
    <url><loc>${request.url.origin}/a_venda</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
    <url><loc>${request.url.origin}/galeria</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
    ${urls_gallery.join('\n')}
    ${urls_for_sale.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    }
  }
  );
}

export { GET }
