// -------- Importing Fonts -----------
import { Poppins, Inter } from "next/font/google";
import styles from "./HeaderHome.module.css";

import Link from "next/link";

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

// -------- Importing Images -----------
import Image from "next/image";
import plantsImages from "/images/Header__plants_images";
import cellphoneMockup from "/images/cellphoneMockup";

export default function HeaderHome() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Image
            src={plantsImages}
            alt="Images of some indoors plants"
            className={styles.header__plants_images}
          ></Image>
          <Image
            src={cellphoneMockup}
            alt="Image of a cellphone mockup"
            className={styles.header__cellphone_mockup}
          ></Image>
          <div className={styles.header__text_content}>
            <h1 className={`${poppins.className} ${styles.header__title}`}>
              La guía que tus plantas estaban pidiendo a gritos
            </h1>
            <p className={`${inter.className} ${styles.header__description}`}>
              Encuentra la mejor manera de mantener tus plantas, verdes,
              saludables y sobretodo...
              <span className={styles.header__description_span}>vivas.</span>
            </p>
            <Link
              href="/plant-searcher"
              className={`${poppins.className} ${styles.header__button}`}
            >
              Descubre cómo cuidar tu planta
            </Link>
          </div>
        </div>
      </header>
      <hr className={styles.header__divider}></hr>
    </>
  );
}
