import Cookies from 'js-cookie';

export const fetchPortfolio = (): string | undefined => {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const { cookies } = require('next/headers');
  const cookieStore = cookies();
  return cookieStore.get('portfolio')?.value;
};

export const patchPortfolio = (symbols: string[]): void => {
  Cookies.set('portfolio', JSON.stringify(symbols));
};
