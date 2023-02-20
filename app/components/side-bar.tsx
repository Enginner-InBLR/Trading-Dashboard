import Link from 'next/link';
import { WrenchIcon } from '@heroicons/react/24/outline';

export default function SideBar() {
  return (
    <nav aria-label="Side Bar" className="flex flex-col space-y-2">
      <div>
        <strong className="block text-xs font-medium uppercase text-gray-400">
          General
        </strong>

        <ul className="mt-2 space-y-1">
          <li>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/markets"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Markets
            </Link>
          </li>

          <li>
            <Link
              href="/portfolio"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <p className="flex items-center block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <s>Prediction</s>
              <WrenchIcon className="h-5 w-5 ml-2" />
            </p>
          </li>

          <li>
            <p className="flex items-center block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <s>APIs</s>
              <WrenchIcon className="h-5 w-5 ml-2" />
            </p>
          </li>
        </ul>
      </div>
      <div>
        <strong className="block text-xs font-medium uppercase text-gray-400">
          Other
        </strong>

        <ul className="mt-2 space-y-1">
          <li>
            <Link
              href="/faq"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              FAQ
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
