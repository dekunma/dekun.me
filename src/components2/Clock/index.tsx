import { useState, useEffect } from "react";

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type ClockProps = {
  onlyTime?: boolean;
  onlyDay?: boolean;
};

const Clock = (props: ClockProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { onlyDay, onlyTime } = props;

  useEffect(() => {
    let updateTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1 * 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  let day = dayList[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes().toString();
  let month = monthList[currentTime.getMonth()];
  let date = currentTime.getDate().toLocaleString();
  let meridiem = hour < 12 ? "AM" : "PM";

  if (minute.toLocaleString().length === 1) {
    minute = "0" + minute;
  }

  if (hour > 12) {
    hour -= 12;
  }

  let displayTime;
  if (onlyTime !== undefined && onlyTime !== null) {
    displayTime = hour + ":" + minute + " " + meridiem;
  } else if (onlyDay !== undefined && onlyDay !== null) {
    displayTime = day + " " + month + " " + date;
  } else
    displayTime =
      day +
      " " +
      month +
      " " +
      date +
      " " +
      hour +
      ":" +
      minute +
      " " +
      meridiem;
  return displayTime;
};

export default Clock;
