import {
  HistoricalDataResponse,
  validIntervals,
  validRanges,
} from '@/app/modules/yahoo-finance/type';

export const fetchHistoricalData = async (
  symbol: string,
  queryParams: { interval: validIntervals; range: validRanges } = {
    interval: '1d',
    range: '3mo',
  }
): Promise<HistoricalDataResponse> => {
  const searchParams = new URLSearchParams(queryParams);
  const response = await fetch(
    `${
      process.env.YAHOO_FINANCE_BASE_URI
    }/chart/${symbol}?${searchParams.toString()}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data in server');
  }
  return response.json();
};
