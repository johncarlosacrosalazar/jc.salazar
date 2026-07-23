"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CareAction, PetSnapshot, Species, VirtualPet } from "../domain/virtual-pet";

const IDLE_SLEEP_DELAY = 5 * 60 * 1000;

export function usePetController() {
  const [snapshot, setSnapshot] = useState<PetSnapshot | null>(null);
  const [isIdleSleeping, setIsIdleSleeping] = useState(false);
  const settleTimer = useRef<number | null>(null);
  const idleTimer = useRef<number | null>(null);
  const pet = useMemo(() => snapshot ? VirtualPet.restore(snapshot) : null, [snapshot]);

  useEffect(() => {
    if (!snapshot?.alive) {
      if (idleTimer.current !== null) window.clearTimeout(idleTimer.current);
      return;
    }

    const registerActivity = () => {
      setIsIdleSleeping(false);
      if (idleTimer.current !== null) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setIsIdleSleeping(true), IDLE_SLEEP_DELAY);
    };
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart", "scroll"];
    events.forEach((event) => window.addEventListener(event, registerActivity, { passive: true }));
    idleTimer.current = window.setTimeout(() => setIsIdleSleeping(true), IDLE_SLEEP_DELAY);

    return () => {
      events.forEach((event) => window.removeEventListener(event, registerActivity));
      if (idleTimer.current !== null) window.clearTimeout(idleTimer.current);
    };
  }, [snapshot?.alive, snapshot?.species]);

  useEffect(() => () => {
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    if (idleTimer.current !== null) window.clearTimeout(idleTimer.current);
  }, []);

  const selectSpecies = (species: Species) => {
    setIsIdleSleeping(false);
    setSnapshot(VirtualPet.create(species).state);
  };

  const perform = (action: CareAction) => {
    setIsIdleSleeping(false);
    setSnapshot((current) => current ? VirtualPet.restore(current).perform(action).state : current);
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      setSnapshot((current) => current ? VirtualPet.restore(current).settle().state : current);
    }, 1300);
  };

  const advanceDay = () => {
    setIsIdleSleeping(false);
    setSnapshot((current) => current ? VirtualPet.restore(current).advanceDay().state : current);
  };
  const reset = () => {
    setIsIdleSleeping(false);
    setSnapshot(null);
  };

  return { pet, isIdleSleeping, selectSpecies, perform, advanceDay, reset };
}
