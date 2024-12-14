import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (data: string) => {
  return dayjs.utc(data).tz("Asia/Tokyo").format("YYYY/MM/DD");
};
