"use client";

import { useEffect, useState } from "react";

export function useServerClock() {
  const [serverTime, setServerTime] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const sync = async () => {
      try {
        const response = await fetch("/api/server-time", { cache: "no-store" });
        const { now } = (await response.json()) as { now: number };
        if (mounted) setServerTime(now);
      } catch {
        // The clock remains in its last known state until the next sync.
      }
    };
    void sync();
    const ticker = window.setInterval(() => setServerTime((value) => value === null ? null : value + 1000), 1000);
    const resync = window.setInterval(sync, 60_000);
    return () => {
      mounted = false;
      window.clearInterval(ticker);
      window.clearInterval(resync);
    };
  }, []);

  return serverTime;
}
