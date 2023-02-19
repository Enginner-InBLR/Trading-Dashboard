import { HistoricalDataResponse } from '@/app/modules/yahoo-finance/type';

export const historicalDataMock: HistoricalDataResponse = {
  chart: {
    result: [
      {
        meta: {
          currency: 'USD',
          symbol: '^GSPC',
          exchangeName: 'SNP',
          instrumentType: 'INDEX',
          firstTradeDate: -1325583000,
          regularMarketTime: 1676671960,
          gmtoffset: -18000,
          timezone: 'EST',
          exchangeTimezoneName: 'America/New_York',
          regularMarketPrice: 4079.09,
          chartPreviousClose: 4090.41,
          previousClose: 4090.41,
          scale: 3,
          priceHint: 2,
          currentTradingPeriod: {
            pre: {
              timezone: 'EST',
              start: 1676624400,
              end: 1676644200,
              gmtoffset: -18000,
            },
            regular: {
              timezone: 'EST',
              start: 1676644200,
              end: 1676667600,
              gmtoffset: -18000,
            },
            post: {
              timezone: 'EST',
              start: 1676667600,
              end: 1676682000,
              gmtoffset: -18000,
            },
          },
          tradingPeriods: [
            [
              {
                timezone: 'EST',
                start: 1676644200,
                end: 1676667600,
                gmtoffset: -18000,
              },
            ],
          ],
          dataGranularity: '1m',
          range: '1d',
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
            'max',
          ],
        },
        timestamp: [1676644200, 1676644260, 1676644320, 1676644380, 1676644440],
        indicators: {
          quote: [
            {
              low: [
                4067.889892578125, 4065.669921875, 4066.22998046875,
                4066.6201171875, 4068.469970703125,
              ],
              close: [
                4068.35009765625, 4066.2900390625, 4066.919921875,
                4068.639892578125, 4072.6298828125,
              ],
              volume: [0, 11889068, 9409380, 7466996, 8086937],
              high: [
                4077.389892578125, 4068.320068359375, 4068.159912109375,
                4069.1201171875, 4072.6298828125,
              ],
              open: [
                4077.389892578125, 4068.31005859375, 4066.22998046875,
                4067.110107421875, 4068.469970703125,
              ],
            },
          ],
          adjclose: [
            {
              adjclose: [
                4068.35009765625, 4066.2900390625, 4066.919921875,
                4068.639892578125, 4072.6298828125,
              ],
            },
          ],
        },
      },
    ],
    error: null,
  },
};
