// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./Footer.module.css";

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
import logo from "../../../public/images/folium-logo.png";
import linkedinIcon from "../../../public/images/icon-linkedin.png";
import githubIcon from "../../../public/images/icon-github.png";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__left_content}>
            <div className={`${jost.className} ${styles.footer__logo}`}>
              <Image
                className={styles.footer__Logo_image}
                src={logo}
                alt="Logo of Folium App"
              ></Image>
              <a className={styles.footer__Logo_text}>Folium</a>
            </div>
            <p className={styles.footer__author}>Coded by Zyanya Chávez</p>
          </div>
          <div className={styles.footer__right_content}>
            <p className={styles.footer__right_content_text}>
              Dale a tus plantas lo que de verdad necesitan.
            </p>
            <Link href="/faq" className={styles.footer__right_content_button}>
              Busca sus cuidados ideales aquí
            </Link>
          </div>
        </div>

        <hr className={styles.footer__divider} />

        <div className={styles.footer__elements_links}>
          <ul
            className={`${poppins.className} ${styles.footer__elements_list}`}
          >
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
          <div className={styles.footer__icons}>
            <a
              href="https://www.linkedin.com/in/zyanyachavez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footer__icon}
                src={linkedinIcon}
                alt="Linkedin Icon"
              ></Image>
            </a>

            <a
              href="https://github.com/heyzyanlml"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footer__icon}
                src={githubIcon}
                alt="Github Icon"
              ></Image>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
