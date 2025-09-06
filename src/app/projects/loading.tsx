import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col h-full">
      {/* Header placeholder */}
      <div className="w-full px-4">
        <div className="mx-auto mt-4 flex h-[80px] items-center justify-between px-6 bg-secondary-background border-4 border-border shadow-shadow">
          <div className="hidden md:flex items-center gap-4">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-16" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-28" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </div>

      <div className="flex-1 pt-8 md:pt-10 pb-10">
        <div className="mb-2 max-w-[880px]">
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-4 w-96 mt-2" />
        </div>
        {/* Two large project cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((i) => (
            <div key={i} className="border-4 border-border shadow-shadow p-6">
              <Skeleton className="h-5 w-28 mb-3" />
              <Skeleton className="h-40 w-full mb-4" />
              <Skeleton className="h-6 w-56 mb-3" />
              <Skeleton className="h-4 w-full mb-6" />
              <div className="flex gap-2 mb-6">
                {Array.from({ length: 4 }).map((_, t) => (
                  <Skeleton key={t} className="h-6 w-20" />
                ))}
              </div>
              <div className="flex gap-3">
                <Skeleton className="h-9 w-32" />
                <Skeleton className="h-9 w-28" />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls placeholder */}
        <div className="flex justify-center gap-6 mt-8">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

