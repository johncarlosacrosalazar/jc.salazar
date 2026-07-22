export type Species = "dog" | "cat";
export type StatKey = "hunger" | "happiness" | "energy" | "cleanliness" | "health";
export type PetStats = Record<StatKey, number>;
export type CareAction = "feed" | "play" | "walk" | "groom" | "rest";
export type LifeStage = "baby" | "adult" | "senior";
export type PetAnimation = "idle" | "happy" | "eating" | "hungry" | "tired" | "dirty" | "sad" | "walking" | "grooming" | "sleeping" | "sick" | "senior" | "dead";

export interface PetSnapshot {
  species: Species;
  name: string;
  age: number;
  stats: PetStats;
  alive: boolean;
  lastAction: CareAction | null;
  message: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const ACTION_EFFECTS: Record<CareAction, Partial<PetStats>> = {
  feed: { hunger: 16, energy: 3, health: 2 },
  play: { happiness: 16, energy: -7 },
  walk: { happiness: 9, energy: -9, cleanliness: -4, health: 2 },
  groom: { cleanliness: 18, happiness: 3 },
  rest: { energy: 20, health: 1 },
};

const ACTION_MESSAGES: Record<CareAction, string> = {
  feed: "That hit the spot. Thank you!",
  play: "Again, again! That was fun.",
  walk: "So many interesting things outside!",
  groom: "Fresh, clean, and feeling great.",
  rest: "That nap was exactly what I needed.",
};

export class VirtualPet {
  static readonly MAX_AGE = 18;

  private constructor(private readonly snapshot: PetSnapshot) {}

  static create(species: Species, name = "Milo"): VirtualPet {
    return new VirtualPet({
      species,
      name,
      age: 1,
      stats: { hunger: 68, happiness: 82, energy: 56, cleanliness: 74, health: 100 },
      alive: true,
      lastAction: null,
      message: species === "cat" ? `Mrrp! I'm ${name}. Let's be friends.` : `Hi, I'm ${name}. What should we do today?`,
    });
  }

  static restore(snapshot: PetSnapshot): VirtualPet {
    return new VirtualPet(structuredClone(snapshot));
  }

  get state(): PetSnapshot {
    return structuredClone(this.snapshot);
  }

  get lifeStage(): LifeStage {
    if (this.snapshot.age < 4) return "baby";
    if (this.snapshot.age < 12) return "adult";
    return "senior";
  }

  get stageLabel(): string {
    if (this.lifeStage === "baby") return this.snapshot.species === "cat" ? "Kitten" : "Puppy";
    return this.lifeStage === "senior" ? "Senior" : "Adult";
  }

  get animation(): PetAnimation {
    if (!this.snapshot.alive) return "dead";
    if (this.snapshot.lastAction === "feed") return "eating";
    if (this.snapshot.lastAction === "play") return "happy";
    if (this.snapshot.lastAction === "walk") return "walking";
    if (this.snapshot.lastAction === "groom") return "grooming";
    if (this.snapshot.lastAction === "rest") return "sleeping";
    if (this.snapshot.stats.health < 30 || this.lowNeeds >= 3) return "sick";
    if (this.snapshot.stats.hunger < 30) return "hungry";
    if (this.snapshot.stats.energy < 30) return "tired";
    if (this.snapshot.stats.cleanliness < 30) return "dirty";
    if (this.snapshot.stats.happiness < 30) return "sad";
    if (this.lifeStage === "senior") return "senior";
    return "idle";
  }

  perform(action: CareAction): VirtualPet {
    if (!this.snapshot.alive) return this;
    const stats = { ...this.snapshot.stats };
    for (const [key, delta] of Object.entries(ACTION_EFFECTS[action])) {
      stats[key as StatKey] = clamp(stats[key as StatKey] + delta);
    }
    return this.with({ stats, lastAction: action, message: ACTION_MESSAGES[action] });
  }

  settle(): VirtualPet {
    return this.with({ lastAction: null });
  }

  advanceDay(): VirtualPet {
    if (!this.snapshot.alive) return this;
    const age = this.snapshot.age + 1;
    const stats: PetStats = {
      hunger: clamp(this.snapshot.stats.hunger - 18),
      happiness: clamp(this.snapshot.stats.happiness - 11),
      energy: clamp(this.snapshot.stats.energy - 8),
      cleanliness: clamp(this.snapshot.stats.cleanliness - 13),
      health: this.snapshot.stats.health,
    };
    const neglected = [stats.hunger, stats.happiness, stats.energy, stats.cleanliness].filter((value) => value === 0).length;
    stats.health = clamp(stats.health - 6 - neglected * 12);
    const alive = stats.health > 0 && age < VirtualPet.MAX_AGE;
    const message = !alive
      ? `${this.snapshot.name} lived a full little life.`
      : stats.health < 30
        ? "I don't feel very well. Please take care of me."
      : stats.hunger < 30
        ? "My tummy is rumbling. Is it mealtime yet?"
        : stats.energy < 30
          ? "I'm so tired. Can I rest for a while?"
          : stats.cleanliness < 30
            ? "I feel dirty and itchy. Can you groom me?"
            : stats.happiness < 30
              ? "I'm feeling lonely. Will you play with me?"
      : age >= 12
        ? `I'm an old ${this.snapshot.species} now. Stay with me?`
        : age >= 4
          ? "Another day, another adventure!"
          : "I grew a little bigger today!";
    return this.with({ age, stats, alive, lastAction: null, message });
  }

  private get lowNeeds(): number {
    const { hunger, happiness, energy, cleanliness } = this.snapshot.stats;
    return [hunger, happiness, energy, cleanliness].filter((value) => value < 25).length;
  }

  private with(changes: Partial<PetSnapshot>): VirtualPet {
    return new VirtualPet({ ...this.snapshot, ...changes });
  }
}
