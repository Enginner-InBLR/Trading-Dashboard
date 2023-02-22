export default function Header() {
  return (
    <header aria-label="Page Header" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Trading Dashboard
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Make your trades smarter and easier. Start now with Trading
              Dashboard!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
