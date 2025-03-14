// -------- Importing Fonts -----------
import { Poppins, Inter } from "next/font/google";
import styles from "./HeaderBlog.module.css";

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

export default function HeaderBlog() {
  return (
    <>
      <header className={styles.headerBlog}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__text_content}>
            <h1 className={`${poppins.className} ${styles.headerBlog__title}`}>
              Bienvenida a tu ‘señorx de las plantas’ era:
            </h1>
            <p
              className={`${inter.className} ${styles.headerBlog__description}`}
            >
              <span className={styles.headerBlog__description_span}>
                ¿Listo para ser el mejor amigo de tus plantas?
              </span>
              <br></br>
              Desde consejos fáciles de cuidado hasta trucos de riego que harán
              que tus plantas crezcan fuertes y radiantes.
            </p>
          </div>
        </div>
      </header>
      <hr className={styles.header__divider}></hr>
    </>
  );
}
