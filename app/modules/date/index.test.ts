import { getDateStringFromTimestamp } from '@/app/modules/date';

describe('getDateStringFromTimestamp', () => {
  it('should convert timestamp to jst Date by default', () => {
    const jstDate = getDateStringFromTimestamp(1672498800);

    expect(jstDate).toBe('2023/01/01 00:00');
  });

  it('should convert timestamp to est Date by specify timezone', () => {
    const estDate = getDateStringFromTimestamp(1672498800, 'America/New_York');

    expect(estDate).toBe('2022/12/31 10:00');
  });
});
