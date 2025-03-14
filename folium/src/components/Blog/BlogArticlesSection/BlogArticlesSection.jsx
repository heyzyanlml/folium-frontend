"use client";
// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./BlogArticlesSection.module.css";

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
import firstMainArticleImage from "../../../../public/images/articles__main-article-image-1.png";
import firstOtherArticleImage from "../../../../public/images/other-article-1.png";
import secondOtherArticleImage from "../../../../public/images/other-article-2.png";
import thirdOtherArticleImage from "../../../../public/images/other-article-3.png";
import fourthOtherArticleImage from "../../../../public/images/other-article-4.png";
import fifthOtherArticleImage from "../../../../public/images/other-article-5.png";
import sixthOtherArticleImage from "../../../../public/images/other-article-6.png";
import AvatarImage from "../../../../public/images/avatar_pp.png";

export default function BlogArticlesSection() {
  // Función que se ejecutará cuando se haga clic en cualquier botón "Leer más"
  const handleReadMoreClick = () => {
    alert("Esta sección está en crecimiento.🌱 ¡Pronto estará disponible!👷🏽‍♀️");
  };

  return (
    <>
      <section className={styles.Blog_Articles}>
        <div className={styles.Blog_Articles__container}>
          <p className={`${jost.className} ${styles.Blog_Articles__title}`}>
            Artículos Populares...
          </p>
          <div className={styles.Blog_Articles__mainArticle_Container}>
            <Image
              className={styles.articles__main_article_image}
              src={firstMainArticleImage}
              alt="Representative image from the article 'Why are my plants dying?'"
            ></Image>
            <div className={styles.articles__main_author_content}>
              <div className={styles.articles__main_author_info}>
                <Image
                  className={styles.articles__main_avatar_image}
                  src={AvatarImage}
                  alt="Author of the article avatar photo'"
                ></Image>{" "}
                <p
                  className={`${jost.className} ${styles.articles__main_article_author}`}
                >
                  Escrito por: Zyanya Chávez
                </p>
              </div>

              <div className={styles.Blog_Articles__mainArticle_info}>
                <h2
                  className={`${poppins.className} ${styles.Blog_Articles__main_article_title}`}
                >
                  ¿POR QUÉ SE MUEREN MIS PLANTAS?
                </h2>

                <p
                  className={`${poppins.className} ${styles.Blog_Articles__main_article_description}`}
                >
                  Si tus hojas amarillas parecen un grito de auxilio, no entres
                  en pánico. Antes de entrar en pánico, descubre qué está
                  pasando y cómo puedes devolverles ese color verde que tanto
                  amas. ¿Demasiada agua? ¿Demasiado sol? No te preocupes,
                  tenemos los secretos para que tus plantitas vuelvan a estar
                  más felices que nunca.
                </p>
                <a
                  className={styles.Blog_Articles__main_article_button}
                  onClick={handleReadMoreClick}
                >
                  Leer más
                </a>
              </div>
            </div>
          </div>

          <a className={`${poppins.className} ${styles.Blog_Articles__seeAll}`}>
            Ver todos →
          </a>

          <div className={styles.Blog_Articles__other_articles}>
            <div className={styles.Blog_Articles__other_articles_container}>
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={firstOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div className={styles.Blog_Articles__other_articles_container}>
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={secondOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div className={styles.Blog_Articles__other_articles_container}>
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={thirdOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div
              className={`${styles.Blog_Articles__other_articles_container} ${styles.other_articles_secondRow} `}
            >
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={fourthOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div
              className={`${styles.Blog_Articles__other_articles_container} ${styles.other_articles_secondRow} `}
            >
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={fifthOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
                onClick={handleReadMoreClick}
              >
                Leer más
              </a>
            </div>
            <div
              className={`${styles.Blog_Articles__other_articles_container} ${styles.other_articles_secondRow} `}
            >
              <Image
                className={styles.Blog_Articles__other_article_image}
                src={sixthOtherArticleImage}
                alt="Cover image for other articles"
              ></Image>
              <a
                className={styles.Blog_Articles__other_article_button}
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
