import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsLoading() {
  return (
    <div className="flex flex-col h-full">
      {/* Header placeholder */}
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

      <div className="flex-1 pt-8 md:pt-10 pb-10 flex flex-col">
        <div className="mb-8">
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-4 w-96 mt-2" />
        </div>
        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[0, 1].map((i) => (
                <div key={i} className="border-4 border-border shadow-shadow p-6 h-[180px]">
                  <Skeleton className="h-6 w-40 mb-2" />
                  <Skeleton className="h-4 w-[85%] mb-3" />
                  <Skeleton className="h-4 w-24 mt-auto" />
                </div>
              ))}
            </div>
          </div>
          {/* Pagination placeholder */}
          <div className="flex justify-center py-4 mt-auto">
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

