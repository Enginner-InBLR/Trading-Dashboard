export interface QuoteResponse {
  high: number[];
  close: number[];
  low: number[];
  volume: number[];
  open: number[];
}

interface adjcloseResponse {
  adjclose: number[];
}

interface IndicatorsResponse {
  quote: [QuoteResponse];
  adjclose: [adjcloseResponse];
}

interface TradingPeriodResponse {
  timezone: string;
  start: number;
  end: number;
  gmtoffset: number;
}

export type validIntervals =
  | '1m'
  | '2m'
  | '5m'
  | '15m'
  | '30m'
  | '60m'
  | '90m'
  | '1h'
  | '1d'
  | '5d'
  | '1wk'
  | '1mo'
  | '3mo';

export type validRanges =
  | '1d'
  | '5d'
  | '1mo'
  | '3mo'
  | '6mo'
  | '1y'
  | '2y'
  | '5y'
  | '10y'
  | 'ytd'
  | 'max';

export interface MetaResponse {
  currency: string;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  previousClose?: number;
  scale: number;
  priceHint: number;
  currentTradingPeriod: Record<
    'pre' | 'regular' | 'post',
    TradingPeriodResponse
  >;
  tradingPeriods: TradingPeriodResponse[][];
  dataGranularity: string;
  range: validRanges;
  validRanges: validRanges[];
}

interface ResultResponse {
  meta: MetaResponse;
  timestamp: number[];
  indicators: IndicatorsResponse;
}

interface ChartResponse {
  result: [ResultResponse];
  error: null | Record<string, unknown>;
}

export interface HistoricalDataResponse {
  chart: ChartResponse;
}

export interface Quote {
  low: string;
  high: string;
  open: string;
  close: string;
  volume: string;
}
