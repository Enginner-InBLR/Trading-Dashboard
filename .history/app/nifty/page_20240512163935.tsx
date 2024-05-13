import InfoBanner from '@/app/components/info-banner';


export default function Nifty() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Nifty
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          further relaese"
        description="Currently only Nifty PE Signals is Supported for more details visit the link below "
        url="https://www.niftyindices.com/reports/historical-data"
      />
      <form className="mt-4"> {/* form starts with a margin-top of 4 */}
        <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3"> {/* header for the form */}
          Add New Entry
        </h2>
        <div className="mb-4"> {/* input box for date */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date (YYYY-MM-DD)
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
        </div>
        <div className="mb-4"> {/* input box for PE value */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peValue">
            Closing Price
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="peValue" type="text" placeholder="Enter PE Value" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> {/* button to add PE entry */}
          Add PE Entry
        </button>
        <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3"> {/* header for the form */}
          Delete PE Entry
        </h2>
        <div className="mb-4"> {/* input box for date */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date to Delete (YYYY-MM-DD)
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> {/* button to add PE entry */}
          Delete PE Entry
        </button>
      </form>
      
    </>
  );
}
