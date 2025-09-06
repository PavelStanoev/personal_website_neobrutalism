import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsLoading() {
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

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8 space-y-6">
        <div>
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-4 w-96 mt-2" />
        </div>
        {/* Two long blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((i) => (
            <div key={i} className="border-4 border-border shadow-shadow p-6 h-[150px]">
              <Skeleton className="h-6 w-40 mb-3" />
              <Skeleton className="h-4 w-[85%] mb-6" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

