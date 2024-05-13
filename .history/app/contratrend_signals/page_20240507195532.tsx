import InfoBanner from '@/app/components/info-banner';


export default function Contratrend() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      <InfoBanner
        title="currently only part of features are available, will be improved in the
          future"
        description="currently only part of US indices are supported."
      />
    </>
  );
}
