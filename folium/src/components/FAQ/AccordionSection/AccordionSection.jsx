"use client";

import { useState } from "react";
import styles from "./AccordionSection.module.css";
import AccordionOption from "../AccordionOption/AccordionOption";
import faqData from "../../../constants/faqData";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <>
      <section className={styles.AccordionSection}>
        <div className={styles.AccordionSection__container}>
          {faqData.map((faq) => (
            <AccordionOption key={faq.id} faq={faq} />
          ))}
        </div>
      </section>
    </>
  );
}
