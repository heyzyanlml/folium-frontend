// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./PlantSearcherSection.module.css";

import Link from "next/link";

const jost = Jost({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function PlantSearcherSection() {
  return (
    <>
      <section className={styles.PlantSearcherSection}>
        <div className={styles.PlantSearcherSection__content}>
          <h2
            className={`${poppins.className} ${styles.PlantSearcherSection__title}`}
          >
            ¿Quieres saber algo de una plantita en especifico?
          </h2>
          <p
            className={`${poppins.className} ${styles.PlantSearcherSection__subtitle}`}
          >
            (Cada cuánto tiempo regarla, en qué momento del día, cuánta agua
            necesita, cuánta luz y más cosas para mantener a tu planta feliz)
          </p>
          <Link href="/faq" className={styles.PlantSearcherSection__button}>
            Descubre cómo consentirla aquí
          </Link>
        </div>
      </section>
    </>
  );
}
