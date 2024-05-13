import InfoBanner from '@/app/components/info-banner';

export default function Gold() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          future"
        description="Currently only Gold Market Momentum are supported."
        url="https://in.investing.com/commodities/refined-gold-historical-data?cid=1184924&end_date=1703442600&st_date=1230748200"
      />
    </>
  );
}
