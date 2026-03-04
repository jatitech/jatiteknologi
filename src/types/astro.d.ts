import type { APIRoute } from "astro";

declare module "astro" {
  /**
   * @template FunctionType
   * @template Paths
   * @template Item
   * @template RawProps
   * @template RawParams
   * @description
   * This type is used to infer the props and params of an API route.
   * It is used in the `getStaticPaths` function to infer the props and params of an API route.
   */
  export type IntrinsicAPIRoute<
    FunctionType extends (...args: any[]) => any,
    Paths = Awaited<ReturnType<FunctionType>>,
    Item = Paths extends Array<infer I> ? I : never,
    RawProps = Item extends { props: infer P } ? P : {},
    RawParams = Item extends { params: infer P } ? P : {},
  > = APIRoute<
    RawProps extends Record<string, any> ? RawProps : {},
    RawParams extends Record<string, string | undefined>
      ? RawParams
      : Record<string, string | undefined>
  >;
}
