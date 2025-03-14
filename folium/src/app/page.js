import styles from "./page.module.css";

import HeaderHome from "../components/Home/HeaderHome/HeaderHome";
import HomeArticlesSection from "../components/Home/HomeArticlesSection/HomeArticlesSection";
import FAQSection from "../components/FAQSection/FAQSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderHome />
      <HomeArticlesSection />
      <FAQSection />
    </div>
  );
}
