"use client";

import Link from "next/link";
import { ArrowLeft, Bath, Bone, Cat, Clock3, Dog, FastForward, Footprints, Heart, MoonStar, RotateCcw, Sparkles, Utensils } from "lucide-react";
import { PetSprite } from "./components/pet-sprite";
import { CareAction, StatKey } from "./domain/virtual-pet";
import { usePetController } from "./hooks/use-pet-controller";
import { useServerClock } from "./hooks/use-server-clock";

const ACTIONS: Array<{ id: CareAction; label: string; icon: typeof Utensils; color: string }> = [
  { id: "feed", label: "Feed", icon: Utensils, color: "#ff8b61" },
  { id: "play", label: "Play", icon: Bone, color: "#8c7cf0" },
  { id: "walk", label: "Walk", icon: Footprints, color: "#38b99a" },
  { id: "groom", label: "Groom", icon: Bath, color: "#48a9df" },
  { id: "rest", label: "Rest", icon: MoonStar, color: "#686dc7" },
];

const STATS: Array<{ key: StatKey; label: string }> = [
  { key: "hunger", label: "Full" }, { key: "happiness", label: "Happy" }, { key: "energy", label: "Energy" },
  { key: "cleanliness", label: "Clean" }, { key: "health", label: "Health" },
];

export default function TamagotchiDemo() {
  const { pet, selectSpecies, perform, advanceDay, reset } = usePetController();
  const serverTime = useServerClock();

  return <main className="min-h-screen bg-[#f6f2e9] text-[#25342f] selection:bg-[#ffe0a3]">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#53605b] transition hover:text-[#172a23]"><ArrowLeft size={17} /> Portfolio</Link>
      <div className="flex items-center gap-2 text-lg font-black"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ff8b61] text-white"><Heart size={18} fill="currentColor" /></span>PawPal</div>
      <span className="rounded-full border border-[#d8d1c3] bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.18em] text-[#6b746f]">Concept demo</span>
    </nav>

    <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:pt-14">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e6f2db] px-3 py-2 text-xs font-bold text-[#477043]"><Sparkles size={14} /> A tiny daily moment of care</div>
        <h1 className="max-w-xl text-5xl font-black leading-[.95] tracking-[-.055em] text-[#172a23] sm:text-7xl">A tiny friend in your browser.</h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-[#66716c] sm:text-lg">Choose a companion, respond to their changing needs, and watch their personality come alive through state-driven animation.</p>
        <div className="mt-8 flex gap-7 border-t border-[#dcd5c8] pt-6"><Metric value="5" label="Live needs" /><Metric value="8" label="Visual states" /><Metric value="1" label="Tiny friend" /></div>
      </div>

      <div className="rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-[0_24px_70px_rgba(73,65,49,.13)] backdrop-blur sm:p-8">
        {!pet ? <SpeciesPicker onSelect={selectSpecies} /> : <>
          <div className="relative mx-auto max-w-[430px] rounded-[45%_45%_42%_42%/38%_38%_48%_48%] border-[5px] border-[#d95f71] bg-[#f47e91] px-8 pb-11 pt-10 shadow-[inset_8px_8px_0_rgba(255,255,255,.2),inset_-8px_-9px_0_rgba(166,50,70,.17),0_18px_0_#c34f62,0_28px_40px_rgba(81,38,45,.2)] sm:px-12">
            <div className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-xs font-black uppercase tracking-[.3em] text-white/80">PawPal</div>
            <div className="rounded-[2rem] border-[5px] border-[#713f51] bg-[#abc18a] p-4 shadow-[inset_0_0_18px_rgba(37,58,39,.24),0_4px_0_rgba(255,255,255,.22)]">
              <div className="flex items-center justify-between border-b-2 border-[#536b4b]/40 pb-2 font-mono text-[10px] font-black uppercase tracking-wider text-[#354b37]"><span>{pet.state.name} / Day {pet.state.age}</span><span>{pet.state.alive ? `${pet.stageLabel} · ♥ ${pet.state.stats.health}` : "In memory ♥"}</span></div>
              <div className="mx-auto h-44 w-52"><PetSprite species={pet.state.species} animation={pet.animation} lifeStage={pet.lifeStage} /></div>
              <div className="min-h-10 border-y-2 border-[#536b4b]/35 py-2 text-center font-mono text-[11px] font-black leading-4 text-[#354b37]">&gt; {pet.state.message}</div>
              <div className="mt-3 grid grid-cols-5 gap-2">{STATS.map(({ key, label }) => <StatMeter key={key} label={label} value={pet.state.stats[key]} />)}</div>
            </div>
            <div className="mt-7 flex justify-center gap-7">{["A", "B", "C"].map((button, index) => <div key={button} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-[#9d3e50] bg-[#ffc453] font-mono text-[10px] font-black text-[#794735] shadow-[0_5px_0_#b06b31] ${index === 1 ? "mt-3" : ""}`}>{button}</div>)}</div>
          </div>

          <div className="mx-auto mt-9 flex max-w-[430px] flex-col gap-3 rounded-2xl border border-[#ddd7cb] bg-white p-4">
            <div className="flex items-center justify-between gap-3 text-xs font-bold text-[#69736e]"><span className="inline-flex items-center gap-2"><Clock3 size={15} /> Server time</span><time className="font-mono text-[#25342f]">{serverTime === null ? "Syncing…" : new Date(serverTime).toLocaleString()}</time></div>
            {pet.state.alive ? <button onClick={advanceDay} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25342f] px-4 py-3 text-sm font-black text-white transition hover:bg-[#3b5148]"><FastForward size={17} /> Fast-forward 1 day</button> : <button onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e85d75] px-4 py-3 text-sm font-black text-white transition hover:bg-[#d34d66]"><RotateCcw size={17} /> Start with a new pet</button>}
          </div>

          <p className="mb-3 mt-7 text-center text-xs font-black uppercase tracking-[.16em] text-[#7c847f]">Choose an action</p>
          <div className="mx-auto grid max-w-[430px] grid-cols-5 gap-2">{ACTIONS.map((action) => <button key={action.id} disabled={!pet.state.alive} onClick={() => perform(action.id)} className="group flex flex-col items-center gap-2 rounded-2xl border border-[#ddd7cb] bg-white px-1 py-3 text-[10px] font-bold transition hover:-translate-y-1 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 sm:text-xs"><span className="grid h-9 w-9 place-items-center rounded-xl text-white transition group-hover:scale-110" style={{ backgroundColor: action.color }}><action.icon size={17} /></span>{action.label}</button>)}</div>
        </>}
      </div>
    </section>
  </main>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div><strong className="block text-2xl text-[#172a23]">{value}</strong><span className="text-xs font-semibold text-[#78807c]">{label}</span></div>;
}

function SpeciesPicker({ onSelect }: { onSelect: (species: "dog" | "cat") => void }) {
  return <div className="mx-auto flex min-h-[590px] max-w-[430px] flex-col justify-center text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-[1.5rem] bg-[#f47e91] text-white shadow-[0_7px_0_#c34f62]"><Heart size={28} fill="currentColor" /></div><p className="mt-8 font-mono text-xs font-black uppercase tracking-[.24em] text-[#d95f71]">New adventure</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em]">Choose your pet</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#737c77]">Your choice creates a living, animated companion.</p><div className="mt-8 grid grid-cols-2 gap-4"><SpeciesButton species="dog" label="Dog" subtitle="Playful & loyal" icon={Dog} onSelect={onSelect} /><SpeciesButton species="cat" label="Cat" subtitle="Curious & calm" icon={Cat} onSelect={onSelect} /></div></div>;
}

function SpeciesButton({ species, label, subtitle, icon: Icon, onSelect }: { species: "dog" | "cat"; label: string; subtitle: string; icon: typeof Dog; onSelect: (species: "dog" | "cat") => void }) {
  return <button onClick={() => onSelect(species)} className="group rounded-3xl border-2 border-[#e3ddd2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#f47e91] hover:shadow-xl"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#fff0e4] text-[#cf754a] transition group-hover:scale-105"><Icon size={42} strokeWidth={1.8} /></span><strong className="mt-4 block text-xl">{label}</strong><span className="mt-1 block text-xs text-[#8a918d]">{subtitle}</span></button>;
}

function StatMeter({ label, value }: { label: string; value: number }) {
  return <div className="text-center font-mono text-[8px] font-black uppercase text-[#354b37]"><div className="mb-1 truncate">{label}</div><div className="flex h-3 items-center gap-px border border-[#536b4b]/50 p-px">{[20, 40, 60, 80, 100].map((step) => <span key={step} className={`h-full flex-1 ${value >= step ? "bg-[#354b37]" : "bg-transparent"}`} />)}</div></div>;
}
