import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const DEFAULT_TIME_ZONE = 'Asia/Tokyo';

/**
 * convert timestamp to timezone date string
 *
 * @param timestamp - timestamp
 * @param timezone - by default 'Asia/Tokyo', if you want to convert to other timezone, specify it
 * @returns date string 'yyyy/MM/dd HH:mm'
 */
export const getDateStringFromTimestamp = (
  timestamp: number,
  timezone = DEFAULT_TIME_ZONE
): string => {
  const date = utcToZonedTime(new Date(timestamp * 1000), timezone);

  return format(date, 'yyyy/MM/dd HH:mm');
};
