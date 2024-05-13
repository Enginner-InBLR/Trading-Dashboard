import InfoBanner from '@/app/components/info-banner';


export default function Contratrend() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Contratrend signals
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          future"
        description="currently only Contratrend signals are supported."
        url="https://ns-frontend-v2.streamlit.app/"
      />
    </>
  );
}
