import type { APIRoute } from "astro";

const GET: APIRoute = async (request) => {
  let url = `User-agent: *
Allow: /

Sitemap: ${request.url.origin}/sitemap.xml`

  return new Response(url, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  }
  );
}

export { GET }
