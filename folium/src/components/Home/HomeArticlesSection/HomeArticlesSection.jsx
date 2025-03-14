"use client";
// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./HomeArticlesSection.module.css";

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
import firstMainArticleImage from "../../../../public/images/articles__main-article-image-1.png";
import secondMainArticleImage from "../../../../public/images/articles__main-article-image-2.png";
import firstOtherArticle from "../../../../public/images/other-article-1.png";
import secondOtherArticle from "../../../../public/images/other-article-2.png";
import thirdOtherArticle from "../../../../public/images/other-article-3.png";

export default function HomeArticles() {
  // Función que se ejecutará cuando se haga clic en cualquier botón "Leer más"
  const handleReadMoreClick = () => {
    alert("Esta sección está en crecimiento.🌱 ¡Pronto estará disponible!👷🏽‍♀️");
  };

  return (
    <>
      <section className={styles.articles}>
        <div className={styles.articles_container}>
          <p className={`${jost.className} ${styles.articles__main_text}`}>
            Si tus plantas pudieran hablar,{" "}
            <span className={styles.articles__main_text_green}>
              te pedirían que leyeras esto...
            </span>
          </p>
          <div className={styles.articles__main_container}>
            <div className={styles.articles__main_article_card}>
              <Image
                className={styles.articles__main_article_image}
                src={firstMainArticleImage}
                alt="Representative image from the article 'Why are my plants dying?'"
              ></Image>
              <h2
                className={`${poppins.className} ${styles.articles__main_article_card_title}`}
              >
                ¿POR QUÉ SE MUEREN MIS PLANTAS?
              </h2>

              <p
                className={`${poppins.className} ${styles.articles__main_article_card_description}`}
              >
                Si tus hojas amarillas parecen un grito de auxilio, no entres en
                pánico. Descubre las razones y rescata tus plantitas. <br />
                ¡Manos a la tierra!
              </p>
              <a
                className={styles.articles__main_article_card_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div className={styles.articles__main_article_card}>
              <Image
                className={styles.articles__main_article_image}
                src={secondMainArticleImage}
                alt="Representative image from the article 'Why are my plants dying?'"
              ></Image>
              <h2
                className={`${poppins.className} ${styles.articles__main_article_card_title}`}
              >
                SINTOMAS DE QUE TU PLANTA NECESITA LUZ
              </h2>

              <p
                className={`${poppins.className} ${styles.articles__main_article_card_description}`}
              >
                Uno de los factores clave en la salud de nuestras verdes. Si
                tienes dudas de si tu planta no recibe suficiente luz, aquí van
                algunos síntomas. ¡Toma nota!
              </p>
              <a
                className={styles.articles__main_article_card_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
          </div>
          <p className={styles.other_articles_text}>ÉCHALE UN OJO A:</p>
          <div className={styles.other_articles}>
            <div className={styles.other_articles_container}>
              <Image
                className={styles.other_article_image}
                src={firstOtherArticle}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div className={styles.other_articles_container}>
              <Image
                className={styles.other_article_image}
                src={secondOtherArticle}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div className={styles.other_articles_container}>
              <Image
                className={styles.other_article_image}
                src={thirdOtherArticle}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
