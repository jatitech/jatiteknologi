import { getCollection } from "astro:content";
import type { IntrinsicAPIRoute } from "@/types/astro";
import { baseLocale } from "@/paraglide/runtime";

export async function getStaticPaths() {
  const blogs = await getCollection("blog");
  const blog = blogs.filter((blog) => blog.id.split("/").at(0) === baseLocale);
  return blog.map((blog) => {
    const [_, ...slug] = blog.id.split("/");
    return {
      params: { slug: slug.join("/") },
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
