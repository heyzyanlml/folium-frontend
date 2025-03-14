// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./FAQSection.module.css";

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

// -------- Importing Images -----------
import Image from "next/image";
import faqImage from "../../../public/images/FAQ_image.png";

export default function FAQSection() {
  return (
    <>
      <section className={styles.faq}>
        <Image
          className={styles.faq__image}
          src={faqImage}
          alt="Background image of a dead plant"
        ></Image>
        <div className={styles.faq__content}>
          <h3 className={`${poppins.className} ${styles.faq__title}`}>FAQ</h3>
          <p className={`${poppins.className} ${styles.faq__subtitle}`}>
            Cosas que nunca te enseñaron sobre plantas (pero deberían)
          </p>
          <p className={`${jost.className} ${styles.faq__description}`}>
            <span className={styles.faq__description_span}>
              ¿Regarlas con café? ¿Hablarles todos los días?
            </span>
            <br />
            Aquí aclaramos todos esos mitos, verdades y dudas para que tus
            plantas no se unan a tu colección de{" "}
            <span className={styles.faq__description_span}>
              ‘fallos decorativos’.
            </span>
          </p>
          <Link href="/faq" className={styles.faq__button}>
            Ir a ‘Preguntas Frecuentes’
          </Link>
        </div>
        <div className={styles.faq__rectangle}></div>
      </section>
    </>
  );
}
