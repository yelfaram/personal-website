import { IconCloud } from "@/components/magicui/icon-cloud";
import awsIcon from "/skills/aws.svg";
import javaIcon from "/skills/java.svg";
import vscodeIcon from "/skills/vscode.svg";

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

const customIcons: Record<string, string> = {
  java: javaIcon,
  amazonaws: awsIcon,
  visualstudiocode: vscodeIcon,
};

// Skills Section
export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => customIcons[slug] || `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
