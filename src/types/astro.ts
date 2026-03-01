import type { APIRoute } from "astro";

// type GetStaticPaths = Awaited<ReturnType<typeof getStaticPaths>>;
// type GetStaticPathsProps = GetStaticPaths[number]["props"];
// type GetStaticPathsParams = GetStaticPaths[number]["params"];

export type IntrinsicAPIRoute<
  FunctionType extends (...args: any[]) => any,
  Paths = Awaited<ReturnType<FunctionType>>,
  Item = Paths extends Array<infer I> ? I : never,
  RawProps = Item extends { props: infer P } ? P : {},
  RawParams = Item extends { params: infer P } ? P : {}
> = APIRoute<
  RawProps extends Record<string, any> ? RawProps : {},
  RawParams extends Record<string, string | undefined>
    ? RawParams
    : Record<string, string | undefined>
>;