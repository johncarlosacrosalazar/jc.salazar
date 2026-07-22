"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CareAction, PetSnapshot, Species, VirtualPet } from "../domain/virtual-pet";

export function usePetController() {
  const [snapshot, setSnapshot] = useState<PetSnapshot | null>(null);
  const settleTimer = useRef<number | null>(null);
  const pet = useMemo(() => snapshot ? VirtualPet.restore(snapshot) : null, [snapshot]);

  useEffect(() => () => {
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
  }, []);

  const selectSpecies = (species: Species) => setSnapshot(VirtualPet.create(species).state);

  const perform = (action: CareAction) => {
    setSnapshot((current) => current ? VirtualPet.restore(current).perform(action).state : current);
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      setSnapshot((current) => current ? VirtualPet.restore(current).settle().state : current);
    }, 1300);
  };

  const advanceDay = () => setSnapshot((current) => current ? VirtualPet.restore(current).advanceDay().state : current);
  const reset = () => setSnapshot(null);

  return { pet, selectSpecies, perform, advanceDay, reset };
}
