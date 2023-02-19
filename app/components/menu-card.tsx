import Link from 'next/link';
import { UrlObject } from 'url';

interface Props {
  title: string;
  description: string;
  supplement?: string;
  url?: string | UrlObject;
  disabled?: boolean;
}

export default function MenuCard({
  title,
  description,
  supplement,
  url,
  disabled = false,
}: Props) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 p-0.5 shadow-md ${
        disabled ? 'opacity-30' : 'hover:opacity-95'
      }`}
    >
      {!disabled && url ? (
        <Link
          className="block rounded-xl bg-white p-6 sm:p-8 hover:opacity-90"
          href={url}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
            <small className="text-xs text-gray-400">{supplement}</small>
          </div>
        </Link>
      ) : (
        <div className="block rounded-xl bg-white p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
          {supplement && (
            <small className="text-xs text-gray-400">{supplement}</small>
          )}
        </div>
      )}
    </div>
  );
}
