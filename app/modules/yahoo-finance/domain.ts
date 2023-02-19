import {
  HistoricalDataResponse,
  MetaResponse,
  QuoteResponse,
} from '@/app/modules/yahoo-finance/type';

export class HistoricalData {
  public meta: MetaResponse;

  public timestamps: number[];

  public quotes: QuoteResponse;

  constructor(historicalDataResponse: HistoricalDataResponse) {
    this.meta = historicalDataResponse.chart.result[0].meta;
    this.timestamps = historicalDataResponse.chart.result[0].timestamp;
    [this.quotes] = historicalDataResponse.chart.result[0].indicators.quote;
  }

  public getRegularMarketChange(): number {
    return this.meta.regularMarketPrice - this.meta.previousClose;
  }

  public getRegularMarketChangePercentage(): number {
    return (this.getRegularMarketChange() / this.meta.regularMarketPrice) * 100;
  }

  public isRegularMarketChangeIncreased(): boolean {
    return this.getRegularMarketChange() >= 0;
  }
}
