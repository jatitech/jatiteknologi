import { getCollection } from "astro:content";
import type { IntrinsicAPIRoute } from "astro";
import { baseLocale } from "@/paraglide/runtime";

export async function getStaticPaths() {
  const blogs = await getCollection("blog");
  const blog = blogs.filter((b) => b.id.split("/").at(0) === baseLocale);
  return blog.map((b) => {
    const [_, ...slug] = b.id.split("/");
    return {
      params: { slug: slug.join("/") },
      props: { blog: b },
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
