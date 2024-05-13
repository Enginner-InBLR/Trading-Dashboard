import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Props {
  title: string;
  description?: string;
  url: string;
}

export default function InfoBanner({ title, description, url }: Props) {
  return (
    <div
      role="alert"
      className="rounded border-l-4 border-cyan-500 bg-cyan-50 p-4"
    >
      <div className="flex items-center gap-2 text-cyan-800">
        <InformationCircleIcon className="h-5 w-5" />
        <strong className="block font-medium">{title}</strong>
      </div>
      {description && (
        <p className="mt-2 text-sm text-cyan-700">{description}</p>
      )}
      {url && (
        <div className="mt-2">
          <Link legacyBehavior href={url} passHref>
            <a className="text-sm text-cyan-700 underline">View more</a>
          </Link>
        </div>
      )}
    </div>
  );
}