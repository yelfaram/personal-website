import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function GridPatternDemo() {
  return (
    <GridPattern
      squares={[
        [4, 4],
        [5, 1],
        [8, 2],
        [5, 3],
        [5, 5],
        [10, 10],
        [12, 15],
        [15, 10],
        [10, 15],
        [15, 10],
        [10, 15],
        [15, 10],
      ]}
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12"
      )}
    />
  );
}
