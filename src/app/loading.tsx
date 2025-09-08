import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <div className="flex flex-col h-full">
      {/* Header bar skeleton */}
      <div className="w-full">
        <div className="mx-auto mt-4 flex h-[80px] items-center justify-between px-4 md:px-12 bg-secondary-background border-4 border-border shadow-shadow">
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

      {/* Hero skeleton */}
      <section className="flex-1 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left text block */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-10" />
            <Skeleton className="h-10 w-72" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-96" />
              <Skeleton className="h-4 w-[420px]" />
              <Skeleton className="h-4 w-[380px]" />
              <Skeleton className="h-4 w-[340px]" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="h-10 w-36" />
          </div>

          {/* Right polaroid image block */}
          <div className="flex justify-center">
            <Skeleton className="h-[420px] w-80" />
          </div>
        </div>
      </section>

      {/* Skills marquee skeleton */}
      <div className="-mx-4 md:-mx-12">
        <div className="flex gap-3 overflow-hidden border-t-2 border-b-2 border-border py-3 px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24" />
          ))}
        </div>
      </div>
    </div>
  );
}

