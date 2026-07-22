import type { LifeStage, PetAnimation, Species } from "../domain/virtual-pet";
import styles from "./pet-sprite.module.css";

interface PetSpriteProps {
  species: Species;
  animation: PetAnimation;
  lifeStage: LifeStage;
}

export function PetSprite({ species, animation, lifeStage }: PetSpriteProps) {
  const scale = lifeStage === "baby" ? 0.82 : lifeStage === "senior" ? 0.94 : 1;
  return (
    <svg viewBox="0 0 220 180" role="img" aria-label={`Animated ${species} virtual pet`} className={`${styles.sprite} ${styles[animation]}`} style={{ scale: String(scale) }}>
      <ellipse className={styles.shadow} cx="110" cy="157" rx="60" ry="9" fill="#304534" />
      {species === "dog" ? <DogSprite /> : <CatSprite />}
      {animation === "eating" && <FoodBowl />}
      {animation === "hungry" && <HungryCue />}
      {animation === "tired" && <TiredCue />}
      {animation === "dirty" && <DirtyCue />}
      {animation === "sad" && <SadCue />}
      {animation === "sick" && <HealthCue />}
      {lifeStage === "senior" && animation !== "dead" && <SeniorDetails />}
      {animation === "sleeping" && <><text x="168" y="65" className={styles.z}>Z</text><text x="187" y="42" className={`${styles.z} ${styles.zTwo}`}>z</text></>}
      {animation === "grooming" && <><circle className={styles.sparkle} cx="48" cy="65" r="5" fill="#304534" /><circle className={styles.sparkle} cx="172" cy="45" r="3" fill="#304534" /></>}
    </svg>
  );
}

function FoodBowl() {
  return <g className={styles.foodBowl} aria-label="Bowl of pet food">
    <g fill="#304534">
      <circle className={styles.kibbleOne} cx="91" cy="139" r="5" />
      <circle className={styles.kibbleTwo} cx="105" cy="136" r="5" />
      <circle className={styles.kibbleThree} cx="120" cy="139" r="5" />
      <circle className={styles.kibbleFour} cx="133" cy="136" r="4" />
    </g>
    <path d="M72 141h76l-8 22H80z" fill="#61784f" stroke="#304534" strokeWidth="5" strokeLinejoin="round" />
    <path d="M70 141h80" stroke="#304534" strokeWidth="7" strokeLinecap="round" />
    <path d="M101 151h18" stroke="#91a970" strokeWidth="4" strokeLinecap="round" />
  </g>;
}

function HungryCue() {
  return <g className={styles.hungryCue} aria-label="Empty food bowl">
    <path d="M153 144h48l-6 16h-36z" fill="#61784f" stroke="#304534" strokeWidth="4" strokeLinejoin="round" />
    <path d="M151 144h52" stroke="#304534" strokeWidth="6" strokeLinecap="round" />
    <text x="170" y="126" className={styles.hungerMark}>!</text>
    <path className={styles.smellLineOne} d="M166 139c-5-8 5-9 0-17" fill="none" stroke="#304534" strokeWidth="3" strokeLinecap="round" />
    <path className={styles.smellLineTwo} d="M185 139c-5-8 5-9 0-17" fill="none" stroke="#304534" strokeWidth="3" strokeLinecap="round" />
  </g>;
}

function TiredCue() {
  return <g aria-label="Low energy indicator"><path className={styles.tiredDrop} d="M166 72c8 11 8 18 0 18s-8-7 0-18z" fill="#61784f" stroke="#304534" strokeWidth="3" /><text x="180" y="55" className={styles.tiredMark}>...</text></g>;
}

function DirtyCue() {
  return <g aria-label="Dirty pet indicator">
    <g fill="#61784f" opacity=".9"><circle cx="78" cy="104" r="6" /><circle cx="137" cy="121" r="8" /><circle cx="111" cy="143" r="5" /></g>
    <g className={styles.flyOne} stroke="#304534" strokeWidth="3" strokeLinecap="round"><circle cx="48" cy="65" r="3" fill="#304534" /><path d="m44 61-5-4m13 4 5-4" /></g>
    <g className={styles.flyTwo} stroke="#304534" strokeWidth="3" strokeLinecap="round"><circle cx="174" cy="91" r="3" fill="#304534" /><path d="m170 87-5-4m13 4 5-4" /></g>
  </g>;
}

function SadCue() {
  return <g aria-label="Sad pet indicator"><path className={styles.tear} d="M88 78c7 10 7 16 0 16s-7-6 0-16z" fill="#61784f" stroke="#304534" strokeWidth="2" /><path d="M91 105q18 12 36 0" fill="none" stroke="#304534" strokeWidth="4" strokeLinecap="round" /></g>;
}

function HealthCue() {
  return <g className={styles.healthCue} aria-label="Low health indicator"><g transform="rotate(-16 142 116)"><rect x="127" y="106" width="31" height="18" rx="8" fill="#b1c48c" stroke="#304534" strokeWidth="4" /><path d="M137 115h11M142.5 110v11" stroke="#304534" strokeWidth="3" /></g><path className={styles.healthPulse} d="M36 55h13l5-9 8 20 7-11h14" fill="none" stroke="#304534" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></g>;
}

function SeniorDetails() {
  return <g className={styles.seniorDetails} aria-label="Senior pet details">
    <g fill="none" stroke="#304534" strokeWidth="3"><circle cx="92" cy="68" r="12" /><circle cx="127" cy="68" r="12" /><path d="M104 68h11M80 67l-10-4M139 67l10-4" /></g>
    <path d="M174 96v58c0 10-13 10-13 1" fill="none" stroke="#304534" strokeWidth="6" strokeLinecap="round" />
    <path d="M88 48q8-7 15 0M119 48q8-7 15 0" fill="none" stroke="#b1c48c" strokeWidth="5" strokeLinecap="round" />
  </g>;
}

function DogSprite() {
  return <g className={styles.body} stroke="#304534" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
    <path className={styles.tail} d="M164 119c30-4 37-28 22-38 3 19-9 24-25 25" fill="#7d945f" />
    <ellipse cx="111" cy="116" rx="58" ry="39" fill="#7d945f" />
    <path d="M70 132v25M94 137v20M137 137v20M157 130v27" />
    <circle cx="108" cy="70" r="48" fill="#91a970" />
    <path d="M72 45C49 36 43 64 56 91l25-20zM144 45c24-9 29 19 15 46l-24-20z" fill="#61784f" />
    <circle className={styles.eye} cx="91" cy="66" r="5" fill="#304534" stroke="none" /><circle className={styles.eye} cx="127" cy="66" r="5" fill="#304534" stroke="none" />
    <ellipse cx="109" cy="86" rx="26" ry="19" fill="#b1c48c" /><ellipse cx="109" cy="81" rx="9" ry="6" fill="#304534" stroke="none" />
    <path d="M109 88c-5 8-12 8-17 3M109 88c5 8 12 8 17 3" fill="none" strokeWidth="3" />
  </g>;
}

function CatSprite() {
  return <g className={styles.body} stroke="#304534" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
    <path className={styles.tail} d="M158 128c34 17 49-7 35-27-9-13-23-4-17 7" fill="none" strokeWidth="10" />
    <ellipse cx="111" cy="119" rx="53" ry="37" fill="#7d945f" />
    <path d="M78 137v20M101 141v16M137 140v17M155 133v24" />
    <path d="M69 57 72 19l28 22a50 50 0 0 1 22 0l28-22 3 39a47 47 0 1 1-84-1z" fill="#91a970" />
    <path d="m77 34 3 19 13-9zM145 34l-3 19-13-9z" fill="#61784f" strokeWidth="3" />
    <circle className={styles.eye} cx="94" cy="70" r="5" fill="#304534" stroke="none" /><circle className={styles.eye} cx="128" cy="70" r="5" fill="#304534" stroke="none" />
    <path d="m111 81-7 5 7 5 7-5z" fill="#304534" stroke="none" /><path d="M111 90c-5 7-11 7-16 2M111 90c5 7 11 7 16 2M88 84l-31-5M88 91l-32 5M134 84l31-5M134 91l32 5" fill="none" strokeWidth="3" />
  </g>;
}
