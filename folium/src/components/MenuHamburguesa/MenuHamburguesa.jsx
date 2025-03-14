"use client";

import { useState } from "react";
// -------- Importing Fonts -----------
import { Jost, Inter } from "next/font/google";
import styles from "./MenuHamburguesa.module.css";

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

export default function MenuHamburguesa() {
  // Estado para controlar si el menú hamburguesa está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // * Menu Hamburguesa
    <div className={styles.Hamburger_menu}>
      <button
        className={styles.Hamburger_menu_button}
        aria-label="Abrir menú"
        onClick={toggleMenu}
      >
        <span className={styles.Hamburger_menu_span}></span>
        <span className={styles.Hamburger_menu_span}></span>
        <span className={styles.Hamburger_menu_span}></span>
      </button>

      {/* Fondo oscuro con opacidad */}
      {isOpen && (
        <div
          className={styles.Hamburger_menu_overlay}
          onClick={toggleMenu} // Cierra el menú al hacer clic fuera
        ></div>
      )}

      <div
        className={`${styles.Hamburger_menu_opened} ${
          isOpen ? styles.open : ""
        }`}
      >
        {/* Botón de cierre */}
        <button
          className={styles.Hamburger_menu_close_button}
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        >
          &times;
        </button>

        <ul className={styles.Hamburger_menu_list}>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={toggleMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/plant-searcher" onClick={toggleMenu}>
              Buscar Plantas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
