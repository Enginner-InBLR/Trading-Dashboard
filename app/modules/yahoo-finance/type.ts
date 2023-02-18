export interface QuoteResponse {
  high: number[];
  close: number[];
  low: number[];
  volume: number[];
  open: number[];
}

interface IndicatorsResponse {
  quote: [QuoteResponse];
}

interface TradingPeriodResponse {
  timezone: string;
  start: number;
  end: number;
  gmtoffset: number;
}

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
  previousClose: number;
  scale: number;
  priceHint: number;
  currentTradingPeriod: {
    pre: TradingPeriodResponse;
    regular: TradingPeriodResponse;
    post: TradingPeriodResponse;
  };
  tradingPeriods: TradingPeriodResponse[][];
  dataGranularity: string;
  range: string;
  validRanges: [
    '1d',
    '5d',
    '1mo',
    '3mo',
    '6mo',
    '1y',
    '2y',
    '5y',
    '10y',
    'ytd',
    'max'
  ];
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
