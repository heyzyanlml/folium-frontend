// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./NoResults.module.css";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// -------- Importing Images -----------
import Image from "next/image";
import noResultsImage from "../../../public/images/sad-plant.gif";

export default function NoResults() {
  return (
    <>
      <div className={styles.NoResults}>
        <p className={`${poppins.className} ${styles.NoResults__Maintext}`}>
          <strong className={styles.NoResults__Maintext_strong}>
            ¡OH NOOOO!
          </strong>
          <br />
          NO ENCONTRAMOS NINGUNA PLANTA
        </p>
        <Image
          src={noResultsImage}
          alt="Image of sad plant for no results"
          className={styles.NoResults__image}
        ></Image>
        <p className={`${poppins.className} ${styles.NoResults__text}`}>
          Parece que esta planta no está en nuestra base de datos… ¿Intentas con
          otro nombre? 🔍
        </p>
      </div>
    </>
  );
}
