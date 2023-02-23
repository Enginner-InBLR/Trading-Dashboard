import Cookies from 'js-cookie';
import { addYears } from 'date-fns';

export const fetchPortfolio = (): string | undefined => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const { cookies } = require('next/headers');
  const cookieStore = cookies();
  return cookieStore.get('portfolio')?.value;
};

export const patchPortfolio = (symbols: string[]): void => {
  Cookies.set('portfolio', JSON.stringify(symbols), {
    expires: addYears(new Date(), 1),
    sameSite: 'lax',
    secure: true,
  });
};
