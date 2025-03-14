// -------- Importing Fonts -----------
import { Poppins, Inter } from "next/font/google";
import styles from "./PlantSearcherHeader.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";

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
// import plantsImages from "../../../public/images/header__plants_images.png";
// import cellphoneMockup from "../../../public/images/header__cellphone_mockup.png";

export default function PlantSearcherHeader({ handleFilteredPlant }) {
  return (
    <>
      <header className={styles.PlantSearcherHeader}>
        <div className={styles.PlantSearcherHeader__wrapper}>
          <div className={styles.PlantSearcherHeader__text_content}>
            <h1
              className={`${poppins.className} ${styles.PlantSearcherHeader__title}`}
            >
              Descubre cómo cuidar tu plantita como se merece
            </h1>
            <p
              className={`${inter.className} ${styles.PlantSearcherHeader__description}`}
            >
              <span className={styles.PlantSearcherHeader__description_span}>
                ¿Listo para ser el mejor amigo de tus plantas?
              </span>
              <br></br>
              (Cada cuánto tiempo regarla, en qué momento del día, cuánta agua
              necesita, cuánta luz y más cosas para mantener a tu planta feliz)
            </p>
          </div>
        </div>

        <SearchBar
          placeholder="Busca el nombre de una planta...."
          handleSearch={handleFilteredPlant}
        />
      </header>
      <hr className={styles.header__divider}></hr>
    </>
  );
}
