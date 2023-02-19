'use client';

import Chart from 'react-apexcharts';
import { format } from 'date-fns';

import { QuoteResponse } from '@/app/modules/yahoo-finance/type';

interface Props {
  timestamps: string[];
  quotesResponse: QuoteResponse;
}

export default function HistoricalDataChart({
  timestamps,
  quotesResponse,
}: Props) {
  return (
    <Chart
      options={{
        chart: {
          id: 'candlestick',
          animations: {
            enabled: false,
          },
        },
        xaxis: {
          type: 'numeric',
          labels: {
            formatter: (value) => format(new Date(value), 'yyyy-MM-dd'),
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => value.toFixed(0),
          },
        },
      }}
      series={[
        {
          data: timestamps.map((timestamp, index) => ({
            x: timestamp,
            y: [
              quotesResponse.open[index],
              quotesResponse.high[index],
              quotesResponse.low[index],
              quotesResponse.close[index],
            ],
          })),
        },
      ]}
      type="candlestick"
    />
  );
}
