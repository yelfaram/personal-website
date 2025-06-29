import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "javascript",
  "typescript",
  "python",
  "cplusplus",
  "java",
  "react",
  "nodedotjs",
  "express",
  "flask",
  "amazonaws",
  "docker",
  "postgresql",
  "git",
  "github",
  "rabbitmq",
  "linux",
  "html5",
  "css",
  "visualstudiocode",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
