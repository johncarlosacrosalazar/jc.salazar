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
      {animation === "sleeping" && <><text x="168" y="65" className={styles.z}>Z</text><text x="187" y="42" className={`${styles.z} ${styles.zTwo}`}>z</text></>}
      {animation === "grooming" && <><circle className={styles.sparkle} cx="48" cy="65" r="5" fill="#304534" /><circle className={styles.sparkle} cx="172" cy="45" r="3" fill="#304534" /></>}
    </svg>
  );
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
