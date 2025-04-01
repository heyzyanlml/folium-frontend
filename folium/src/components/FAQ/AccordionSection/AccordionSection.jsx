"use client";

import { useState } from "react";
import styles from "./AccordionSection.module.css";
import AccordionOption from "../AccordionOption/AccordionOption";
import faqData from "../../../constants/faqData";

// -------- Importing Images -----------
import Image from "next/image";
import plusIcon from "../../../../public/images/Plus_icon.png";
import minusIcon from "../../../../public/images/minus_icon.png";

// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";

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

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className={styles.AccordionSection}>
        <div className={styles.AccordionSection__container}>
          {faqData.map((faq, index) => (
            <details
              key={faq.id}
              className={styles.AccordionSection__Accordion}
              open={openIndex === index}
            >
              <summary
                className={`${poppins.className} ${styles.AccordionSection__Accordion_title}`}
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento nativo de <details>
                  toggleAccordion(index); // Maneja la apertura con useState
                }}
              >
                <p
                  className={`${poppins.className} ${styles.AccordionSection__Accordion_number}`}
                >
                  {faq.number}
                </p>
                {faq.title}
                <Image
                  src={openIndex === index ? minusIcon : plusIcon}
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
          ))}
        </div>
      </section>
    </>
  );
}
