'use client';

import Chart from 'react-apexcharts';

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
