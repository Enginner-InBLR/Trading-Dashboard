import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FaqPage() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">FAQ</h2>
      <section className="space-y-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              What is the Trading Dashboard?
            </h2>
            <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            The Trading Dashboard is an application that displays trading data
            for stocks, and other securities to assist with trading.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              What kind of trading data can I view on the Trading Dashboard?
            </h2>
            <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            The Trading Dashboard displays data such as prices, volume, market
            depth, charts, and other trading indicators for stocks, and other
            securities.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              Can I trade directly on the Trading Dashboard?
            </h2>
            <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            No, the Trading Dashboard is an information tool to support trading
            and does not allow direct trading.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              Is the Trading Dashboard a paid application?
            </h2>
            <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            The Trading Dashboard is available for free
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              What should I do if I don&apos;t understand how to use the Trading
              Dashboard?
            </h2>
            <ChevronDownIcon className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            If you don&apos;t understand how to use the Trading Dashboard, you
            can contact customer support for assistance.
          </p>
        </details>
      </section>
    </>
  );
}
