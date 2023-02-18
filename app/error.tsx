'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div
      role="alert"
      className="rounded border-l-4 border-red-500 bg-red-50 p-4"
    >
      <strong className="block font-medium text-red-800">
        An error occurred while loading the page.
      </strong>

      <ul className="mt-2 text-sm text-red-700">
        <li>{`Message: ${error.message}`}</li>
      </ul>
    </div>
  );
}
