import { getCollection } from "astro:content";
import type { IntrinsicAPIRoute } from "astro";
import { baseLocale } from "@/paraglide/runtime";

export async function getStaticPaths() {
  const blogs = await getCollection("blog");
  return blogs
    .filter((blog) => !blog.id.startsWith(baseLocale))
    .map((blog) => {
      const [lang, ...slug] = blog.id.split("/");
      return {
        params: { lang, slug: slug.join("/") },
        props: { blog },
      };
    });
}

export const GET: IntrinsicAPIRoute<typeof getStaticPaths> = ({ props }) => {
  return new Response(props.blog.body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
