import useSWR from "swr";

import fetch from "../fetch";
import { transformLuma, upcomingEvent } from "../events";
import Event from "./Event";

import styles from "./Events.module.css";

const LUMA_API = (id: string) => `https://api.lu.ma/calendar/get?api_id=${id}`;

type Props = {
  lumaId: string;
};

export default function Events({ lumaId }: Props) {
  const { data, error, isLoading } = useSWR(LUMA_API(lumaId), fetch);

  if (error) {
    return (
      <div className={styles.innerMessage} title={error}>
        Unable to load events
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.innerLoading}>
        {Array(8).map((_, i) => (
          <div
            key={i}
            className={styles.card + " " + styles.cardPlaceholder}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {transformLuma(data)
          .filter(upcomingEvent)
          .map((event) => (
            <Event key={event.id} event={event} />
          ))}
      </div>
    </div>
  );
}
