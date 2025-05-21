import type { MDXComponents } from "mdx/types";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl font-bold mb-4" {...(props as any)} />
    ),
    img: (props) => (
      <NextImage
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as NextImageProps)}
      />
    ),
    ...components,
  };
}
