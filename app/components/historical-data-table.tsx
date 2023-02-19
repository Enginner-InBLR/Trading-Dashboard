import { QuoteResponse } from '@/app/modules/yahoo-finance/type';

interface Props {
  timestamps: string[];
  quotesResponse: QuoteResponse;
}

export default function HistoricalDataTable({
  timestamps,
  quotesResponse,
}: Props) {
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
          {timestamps
            .map((timestamp, index) => (
              <tr
                key={timestamp}
                className="odd:bg-gray-50 w-full table table-fixed"
              >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                  {timestamp}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                  {quotesResponse.low[index].toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {quotesResponse.high[index].toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {quotesResponse.open[index].toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {quotesResponse.close[index].toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {quotesResponse.volume[index]}
                </td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </div>
  );
}
