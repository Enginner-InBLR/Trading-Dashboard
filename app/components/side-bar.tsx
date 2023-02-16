export default function SideBar() {
  return (
    <nav aria-label="Side Bar" className="flex flex-col space-y-2">
      <div>
        <strong className="block text-xs font-medium uppercase text-gray-400">
          General
        </strong>

        <ul className="mt-2 space-y-1">
          <li>
            <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Market
            </p>
          </li>

          <li>
            <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Portfolio
            </p>
          </li>

          <li>
            <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Prediction
            </p>
          </li>
        </ul>
      </div>
      <div>
        <strong className="block text-xs font-medium uppercase text-gray-400">
          Settings
        </strong>

        <ul className="mt-2 space-y-1">
          <li>
            <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Account
            </p>
          </li>
          <li>
            <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              APIs
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
