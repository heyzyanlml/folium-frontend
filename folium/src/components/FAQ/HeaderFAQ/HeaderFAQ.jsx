// -------- Importing Fonts -----------
import { Poppins, Inter } from "next/font/google";
import styles from "./HeaderFAQ.module.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function HeaderFAQ() {
  return (
    <>
      <header className={styles.HeaderFAQ}>
        <div className={styles.HeaderFAQ__wrapper}>
          <div className={styles.HeaderFAQ__text_content}>
            <h1 className={`${poppins.className} ${styles.HeaderFAQ__title}`}>
              Preguntas comunes de Plant Lovers
            </h1>
            <p
              className={`${inter.className} ${styles.HeaderFAQ__description}`}
            >
              <span className={styles.HeaderFAQ__description_span}>
                Sabemos que iniciar en este mundo de las plantas no es tan fácil
              </span>
              <br></br>
              Descubre las dudas más frecuentes sobre cómo cuidar a tus plantas,
              cómo elegirlas, etc.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
