import InfoBanner from '@/app/components/info-banner';

export default function Golden() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          future"
        description="currently only Golden dragon Market Momentum are supported."
        url="https://in.investing.com/indices/msci-golden-dragon-historical-data"
      />
    </>
  );
}
