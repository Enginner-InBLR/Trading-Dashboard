import HistoricalDataTable from '@/app/components/historical-data-table';
import { getDateStringFromTimestamp } from '@/app/modules/date';
import { HistoricalData } from '@/app/modules/yahoo-finance/domain';
import { fetchHistoricalData } from '@/app/modules/yahoo-finance/repository';
import { Quote } from '@/app/modules/yahoo-finance/type';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

interface Props {
  symbol: string;
}

export default async function StockBoard({ symbol }: Props) {
  const historicalDataResponse = await fetchHistoricalData(symbol);
  const historicalData = new HistoricalData(historicalDataResponse);

  const timestamps = historicalData.timestamps.map(getDateStringFromTimestamp);
  const quotes = historicalData.quotes.volume.map(
    (_, index): Quote => ({
      low: historicalData.quotes.low[index].toFixed(2),
      high: historicalData.quotes.high[index].toFixed(2),
      open: historicalData.quotes.open[index].toFixed(2),
      close: historicalData.quotes.close[index].toFixed(2),
      volume: String(historicalData.quotes.volume[index]),
    })
  );
  const regularMarketChange = historicalData
    .getRegularMarketChange()
    .toFixed(2);
  const regularMarketChangePercentage = historicalData
    .getRegularMarketChangePercentage()
    .toFixed(2);

  return (
    <article className="rounded-lg border border-gray-100 bg-white p-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-500">{symbol}</p>
          <p className="text-2xl font-medium text-gray-900">{`$${historicalData.meta.regularMarketPrice.toFixed(
            2
          )}`}</p>
        </div>

        {historicalData.isRegularMarketChangeIncreased() ? (
          <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
            <ArrowTrendingUpIcon className="h-4 w-4" />
            <span className="text-xs font-medium">
              {`$${regularMarketChange} (${regularMarketChangePercentage}%)`}
            </span>
          </div>
        ) : (
          <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
            <ArrowTrendingDownIcon className="h-4 w-4" />
            <span className="text-xs font-medium">
              {`$${regularMarketChange} (${regularMarketChangePercentage}%)`}
            </span>
          </div>
        )}
      </div>
      <HistoricalDataTable timestamps={timestamps} quotes={quotes} />
    </article>
  );
}
