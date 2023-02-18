import { HistoricalDataResponse } from '@/app/modules/yahoo-finance/type';

export async function fetchHistoricalData(
  symbol: string
): Promise<HistoricalDataResponse> {
  const response = await fetch(
    `${process.env.YAHOO_FINANCE_BASE_URI}/chart/${symbol}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data in server');
  }
  return response.json();
}
