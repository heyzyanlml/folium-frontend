// -------- Importing Fonts -----------
import { Jost, Inter } from "next/font/google";
import styles from "./NavBar.module.css";
import MenuHamburguesa from "../MenuHamburguesa/MenuHamburguesa";

import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "400", "500", "700", "800"],
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
});

// -------- Importing Images -----------
import Image from "next/image";
import logo from "../../../public/images/folium-logo.png";

export default function NavBar() {
  return (
    <nav className={`${inter.className} ${styles.nav}`}>
      <Link href="/">
        <div className={`${jost.className} ${styles.nav__logo}`}>
          <Image
            className={styles.Nav__Logo_image}
            src={logo}
            alt="Logo of Folium App"
          ></Image>
          <p className={styles.Nav__Logo_text}>Folium</p>
        </div>
      </Link>

      <div className={`${inter.className} ${styles.Nav__elements_container}`}>
        <ul className={styles.Nav__elements_list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/faq">
            <li>FAQ</li>
          </Link>
        </ul>
        <Link
          href="/plant-searcher"
          className={styles.Nav__elements_plant_searcher}
        >
          Buscar Plantas
        </Link>

        <MenuHamburguesa />
      </div>
    </nav>
  );
}
