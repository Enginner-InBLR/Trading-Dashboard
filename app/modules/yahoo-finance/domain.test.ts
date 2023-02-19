import { HistoricalData } from '@/app/modules/yahoo-finance/domain';
import { historicalDataMock } from '@/app/modules/yahoo-finance/fixture';

describe('historicalData', () => {
  let historicalData: HistoricalData;

  beforeEach(() => {
    historicalData = new HistoricalData(historicalDataMock);
  });

  it('getRegularMarketChange calculation should be correct', () => {
    expect(historicalData.getRegularMarketChange()).toBe(-11.319999999999709);
  });

  it('getRegularMarketChangePercentage calculation should be correct', () => {
    expect(historicalData.getRegularMarketChangePercentage()).toBe(
      -0.27751287664649976
    );
  });

  it('isRegularMarketChangeIncreased should be return correct bool', () => {
    expect(historicalData.isRegularMarketChangeIncreased()).toBe(false);
  });
});
