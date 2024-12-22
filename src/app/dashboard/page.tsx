import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const stats = [
  { 
    name: 'Total Scans', 
    value: '405', 
    unit: 'fruits',
    change: '+12.5%',
    changeType: 'increase',
    color: 'primary'
  },
  { 
    name: 'Average Quality Score', 
    value: '92%', 
    unit: 'accuracy',
    change: '+4.2%',
    changeType: 'increase',
    color: 'tech'
  },
  { 
    name: 'Processing Time', 
    value: '1.2', 
    unit: 'sec/fruit',
    change: '-0.3s',
    changeType: 'decrease',
    color: 'accent-yellow'
  },
  { 
    name: 'Success Rate', 
    value: '99.8%', 
    unit: 'detection',
    change: '+0.5%',
    changeType: 'increase',
    color: 'accent-orange'
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-gray-50">
      <div className="mb-8">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Track and monitor your fruit quality assessment metrics
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <Card 
            key={item.name} 
            className={`px-4 py-5 sm:p-6 border-l-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white ${
              item.color === 'primary' 
                ? 'border-l-primary-500' 
                : item.color === 'tech'
                ? 'border-l-tech-500'
                : item.color === 'accent-yellow'
                ? 'border-l-accent-yellow'
                : 'border-l-accent-orange'
            }`}
          >
            <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {item.value}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {item.unit}
                </span>
              </div>

              <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0
                ${
                  item.changeType === 'increase'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-blue-50 text-blue-700'
                }
              `}>
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-blue-500"
                    aria-hidden="true"
                  />
                )}
                {item.change}
              </div>
            </dd>
          </Card>
        ))}
      </dl>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-t-4 border-t-primary-500">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700">New batch analysis completed</p>
              <p className="text-sm text-gray-500 mt-1">2 minutes ago</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-700">System calibration performed</p>
              <p className="text-sm text-gray-500 mt-1">1 hour ago</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-t-4 border-t-tech-500">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quality Metrics</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700">Average ripeness score: 8.5/10</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-700">Defect detection accuracy: 99.2%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '99.2%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
