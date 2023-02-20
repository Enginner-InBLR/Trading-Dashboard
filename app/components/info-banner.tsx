import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  title: string;
  description: string;
}

export default function InfoBanner({ title, description }: Props) {
  return (
    <div
      role="alert"
      className="rounded border-l-4 border-cyan-500 bg-cyan-50 p-4"
    >
      <div className="flex items-center gap-2 text-cyan-800">
        <InformationCircleIcon className="h-5 w-5" />
        <strong className="block font-medium">{title}</strong>
      </div>
      <p className="mt-2 text-sm text-cyan-700">{description}</p>
    </div>
  );
}
