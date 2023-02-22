'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';

import { PortfolioFieldValues } from '@/app/modules/portfolio/type';
import { patchPortfolio } from '@/app/modules/portfolio/repository';
import { useCallback } from 'react';
import { VALID_TICKER_SYMBOLS } from '@/app/modules/portfolio/domain';
import { useAlertStore } from '@/app/components/alert';

interface Props {
  symbols: string[];
}

export default function SettingForm({ symbols }: Props) {
  const router = useRouter();
  const setAlert = useAlertStore((state) => state.setAlert);

  const { control, register, handleSubmit, formState } =
    useForm<PortfolioFieldValues>({
      values: {
        portfolio: symbols.map((symbol) => ({
          symbol,
        })),
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'portfolio',
  });

  const onSubmit = useCallback(
    (data: PortfolioFieldValues) => {
      const newSymbols = data.portfolio.map((item) => item.symbol);
      patchPortfolio(newSymbols);
      router.refresh();
      setAlert('Portfolio updated');
    },
    [router, setAlert]
  );

  return (
    <section className="rounded-lg border border-gray-100 bg-white p-6 space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="sr-only" htmlFor="name">
            Symbol
          </label>
          <ul className="space-y-4">
            {fields.map((field, index) => (
              <li key={field.id}>
                <div className="relative">
                  <select
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register(`portfolio.${index}.symbol`, {
                      required: 'should not be empty',
                    })}
                    key={field.id}
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm appearance-none"
                    defaultValue=""
                  >
                    <option value="" selected disabled hidden>
                      -- should select an option --
                    </option>
                    {VALID_TICKER_SYMBOLS.map((symbol) => (
                      <option key={symbol} value={symbol}>
                        {symbol}
                      </option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                    <button
                      type="button"
                      className="rounded-full bg-gray-500 p-0.5 text-white hover:opacity-90"
                      onClick={() => remove(index)}
                    >
                      <span className="sr-only">Delete</span>
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </span>
                </div>
                {formState.errors.portfolio?.[index]?.symbol && (
                  <div>
                    <small className="text-red-500">
                      {formState.errors.portfolio?.[index]?.symbol?.message}
                    </small>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 sm:space-x-4 space-y-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            onClick={() => append({ symbol: '' })}
          >
            add new symbol
          </button>

          <button
            type="submit"
            className={`inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto ${
              !formState.isDirty && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!formState.isDirty}
          >
            <span className="font-medium"> Save </span>
          </button>
        </div>
      </form>
    </section>
  );
}
