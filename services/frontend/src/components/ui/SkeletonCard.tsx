import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex gap-4 max-w-full flex-wrap items-center justify-center">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
}
