import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const TIME_ZONE = 'Asia/Tokyo';

export const getDateStringFromTimestamp = (timestamp: number): string => {
  const date = utcToZonedTime(new Date(timestamp * 1000), TIME_ZONE);

  return format(date, 'yyyy/MM/dd HH:mm');
};
