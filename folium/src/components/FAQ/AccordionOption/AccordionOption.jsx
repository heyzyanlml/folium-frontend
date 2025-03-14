"use client";

import { useState } from "react";
// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./AccordionOption.module.css";

const jost = Jost({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// -------- Importing Images -----------
import Image from "next/image";
import plusIcon from "../../../../public/images/Plus_icon.png";
import minusIcon from "../../../../public/images/minus_icon.png";

export default function AccordionOption({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <details className={styles.AccordionSection__Accordion} open={isOpen}>
        <summary
          className={`${poppins.className} ${styles.AccordionSection__Accordion_title}`}
          onClick={toggleAccordion}
        >
          <p
            className={`${poppins.className} ${styles.AccordionSection__Accordion_number}`}
          >
            {faq.number}
          </p>
          {faq.title}
          <Image
            src={isOpen ? plusIcon : minusIcon}
            alt="Abrir/Cerrar"
            className={styles.AccordionSection__Accordion_icon}
            id="icon-1"
          />
        </summary>
        <div>
          <hr className={styles.AccordionSection__divider}></hr>
          <p
            className={`${poppins.className} ${styles.AccordionSection__Accordion_text}`}
            dangerouslySetInnerHTML={{ __html: faq.description }}
          ></p>
        </div>
      </details>
    </>
  );
}
