import StockBoard from '@/app/components/stock-board';
import SettingForm from '@/app/portfolio/setting-form';
import { fetchPortfolio } from '@/app/modules/portfolio/repository';
import InfoBanner from '@/app/components/info-banner';

export default function Portfolio() {
  const portfolio = fetchPortfolio();
  const symbols: string[] = portfolio ? JSON.parse(portfolio) : [];

  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Portfolio
      </h2>
      <InfoBanner
        title="currently only part of features are available, will be improved in the
          future"
        description="you can manage your portfolio here, but please note that only the Nasdaq
          100 is supported at this time."
      />
      <InfoBanner title="portfolio data is persisted in your browser's for 1 year from saved" />
      <SettingForm symbols={symbols} />
      {symbols.map((symbol) => (
        <>
          {/* @ts-expect-error: https://github.com/vercel/next.js/issues/42292 */}
          <StockBoard symbol={symbol} />
        </>
      ))}
    </>
  );
}
