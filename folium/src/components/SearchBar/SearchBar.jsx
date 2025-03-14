// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./SearchBar.module.css";
import Image from "next/image";

import searchIcon from "../../../public/images/search_icon.svg";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function SearchBar({
  handleSearch,
  placeholder = "Encuentra lo que necesitas...",
}) {
  return (
    <>
      <section className={styles.search}>
        <div className={styles.search__input_wrapper}>
          <input
            type="search"
            placeholder={placeholder}
            className={`${poppins.className} ${styles.search__input}`}
            onChange={handleSearch}
          />
          <div className={styles.header__search_icon}>
            <Image
              src={searchIcon}
              alt="Search Bar Icon"
              className={styles.header__search_iconImage}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
