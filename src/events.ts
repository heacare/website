import type { RemirrorJSON } from "@remirror/core";

export type EventData = {
  id: string;
  graphic: string;
  start: Date;
  end: Date;
  timezone: string;
  title: string;
  description_mirror: RemirrorJSON;
  url: string;
  tags: {
    label: string;
    color: string;
  }[];
};

type LumaData = {
  calendar: {
    api_id: string;
    name: string;
    slug: string;
  };
  items: LumaEventData[];
};
type LumaEventData = {
  event: {
    api_id: string;
    cover_url: string;
    description_mirror: RemirrorJSON;
    name: string;
    start_at: string;
    timezone: string;
    url: string;
    end_at: string;
  };
  tags: {
    api_id: string;
    label: string;
    color: string;
  }[];
};
function transformLumaEvent(data: LumaEventData): EventData {
  return {
    id: data.event.api_id,
    graphic: data.event.cover_url.replace(
      "https://cdn.lu.ma/",
      "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=500,height=250/"
    ),
    start: new Date(data.event.start_at),
    end: new Date(data.event.end_at),
    timezone: data.event.timezone,
    title: data.event.name,
    description_mirror: data.event.description_mirror,
    url: `https://lu.ma/${data.event.url}`,
    tags: data.tags,
  };
}
export function transformLuma(data: unknown): EventData[] {
  return (data as LumaData).items.map((item) => transformLumaEvent(item));
}

export function upcomingEvent(event: EventData) {
  const now = new Date();
  return now.getTime() < event.end.getTime();
}

export function ongoingEvent(event: EventData) {
  const now = new Date();
  return (
    event.end.getTime() < now.getTime() && now.getTime() > event.start.getTime()
  );
}
