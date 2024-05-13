import InfoBanner from '@/app/components/info-banner';

export default function SP() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          future"
        description="currently only s&p Market Momentum are supported. Find S&P 500 closing price data here"
        url="https://in.investing.com/indices/us-spx-500-historical-data"
      />
    </>
  );
}
