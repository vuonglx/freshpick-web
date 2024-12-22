import { Card } from "@/components/ui/card";

export default function DashboardLoading() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="px-4 py-5 sm:p-6">
            <dt className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            <dd className="mt-1 h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          </Card>
        ))}
      </dl>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
          <div className="mt-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
          <div className="mt-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </Card>
      </div>
    </div>
  );
}
