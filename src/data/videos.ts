// src/data/videos.ts - every Japan video on the family's YouTube channel.
//
// videos.json is a snapshot of AL_Vault's video list (country = Japan), taken
// 2026-11-15. AL_Vault isn't reachable at build time, so new uploads need a
// fresh snapshot: search_videos with country "Japan", then add the new rows
// here (id, cleaned title, city, date, seconds, short = 62 seconds or less).
import raw from "./videos.json";

export type Video = {
  id: string;
  title: string;
  city: string;
  date: string;
  seconds: number;
  short: boolean;
};

export const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/UCj0i52MS0IQwvPvXVmcZ9OA";

/** Newest first. */
export const VIDEOS: Video[] = [...(raw as Video[])].sort((a, b) => b.date.localeCompare(a.date));
export const LONG_VIDEOS = VIDEOS.filter((v) => !v.short);
export const SHORTS = VIDEOS.filter((v) => v.short);

/** Cities in the order the site lists destinations, then anything else A to Z. */
const CITY_ORDER = ["Tokyo", "Osaka", "Kyoto", "Hiroshima", "Fukuoka", "Kobe", "Nara", "Yokohama"];
export function videoCities(): { city: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const v of VIDEOS) counts.set(v.city, (counts.get(v.city) ?? 0) + 1);
  const rank = (c: string): number => (CITY_ORDER.includes(c) ? CITY_ORDER.indexOf(c) : CITY_ORDER.length);
  return [...counts]
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => rank(a.city) - rank(b.city) || a.city.localeCompare(b.city));
}

/** 1:41:09 or 20:20. */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

/** ISO 8601 duration for VideoObject schema, e.g. PT1H41M9S. */
export function isoDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${s}S`;
}

export const watchUrl = (id: string): string => `https://www.youtube.com/watch?v=${id}`;
export const thumbUrl = (id: string): string => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
