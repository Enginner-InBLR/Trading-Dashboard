'use client';

import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { create } from 'zustand';

interface AlertStore {
  alertText: string | undefined;
  setAlert: (alert: string) => void;
  removeAlert: () => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  alertText: undefined,
  setAlert: (alertText) => set({ alertText }),
  removeAlert: () => set({ alertText: undefined }),
}));

export function Alert() {
  const { alertText, removeAlert } = useAlertStore((state) => state);

  useEffect(() => {
    const timeout = setTimeout(removeAlert, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alertText, removeAlert]);

  if (!alertText) return null;

  return (
    <div
      role="alert"
      className="fixed top-5 left-[50%] translate-x-[-50%] z-10 bg-slate-50 rounded-xl border border-gray-100 p-4 shadow-xl"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <CheckCircleIcon className="h-6 w-6" />
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {alertText}
          </strong>
        </div>

        <button
          type="button"
          className="text-gray-500 transition hover:text-gray-600"
          onClick={removeAlert}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
