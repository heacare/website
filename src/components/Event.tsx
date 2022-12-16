import {
  RemirrorRenderer,
  Doc,
  Heading,
  CodeBlock,
  TextHandler,
  createLinkHandler,
} from "@remirror/react-renderer";
import type { MarkMap } from "@remirror/react-renderer";

const typeMap: MarkMap = {
  blockquote: "blockquote",
  bullet_list: "ul",
  doc: Doc,
  heading: Heading,
  paragraph: "p",
  horizontal_rule: "hr",
  image: "img",
  hard_break: "br",
  code_block: CodeBlock,
  ordered_list: "ol",
  text: TextHandler,
};

const markMap: MarkMap = {
  italic: "em",
  bold: "strong",
  code: "code",
  link: createLinkHandler(),
  underline: "u",
};

import { EventData, upcomingEvent, ongoingEvent } from "../events";

import styles from "./Events.module.css";

type Props = {
  event: EventData;
};

export default function Event({ event }: Props) {
  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "long",
    });
  };

  let tags = null;
  if (event.tags.length > 0) {
    tags = (
      <div className={styles.tags}>
        {event.tags.map((tag) => (
          <span key={tag.label} className={styles.tag}>
            {tag.label}
          </span>
        ))}
      </div>
    );
  }

  const past = !upcomingEvent(event);
  const ongoing = ongoingEvent(event);

  return (
    <div className={styles.card + " " + (past ? styles.cardPast : "")}>
      <img className={styles.graphic} src={event.graphic} />
      <div className={styles.content}>
        <p className={styles.time + " " + (past ? styles.timePast : "")}>
          {ongoing && <div className={styles.happening}>Happening now</div>}
          <time dateTime={event.start.toISOString()}>
            {formatDate(event.start)}
          </time>
        </p>
        <h3>{event.title}</h3>
        {tags}
        <RemirrorRenderer
          json={event.description_mirror}
          typeMap={typeMap}
          markMap={markMap}
        />
        <div className={styles.details}>
          <a target="_blank" href={event.url}>
            Details &#10140;
          </a>
        </div>
      </div>
    </div>
  );
}
