import { Quote } from '@/app/modules/yahoo-finance/type';

interface Props {
  timestamps: string[];
  quotes: Quote[];
}

export default function HistoricalDataTable({ timestamps, quotes }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm relative">
        <thead className="sticky top-0">
          <tr className="w-[calc(100%_-_1rem)] table table-fixed">
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              timestamp
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              low
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              high
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              open
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              close
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              volume
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 overflow-y-scroll max-h-[300px] block">
          {timestamps.map((timestamp, index) => (
            <tr
              key={timestamp}
              className="odd:bg-gray-50 w-full table table-fixed"
            >
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {timestamp}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                {quotes[index].low}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {quotes[index].high}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {quotes[index].open}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {quotes[index].close}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {quotes[index].volume}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
