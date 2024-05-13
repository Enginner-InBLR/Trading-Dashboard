import InfoBanner from '@/app/components/info-banner';


export default function Nasdaq() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          future"
        description="currently only Nasdaq Market Momentum are supported. Find Nasdaq closing data below"
        url="https://www.nasdaq.com/market-activity/index/comp/historical"
      />
    </>
  );
}
