import { useEffect } from "react";
// -------- Importing Fonts -----------
import { Poppins, Inter } from "next/font/google";
import styles from "./OpenedPlantInfoCard.module.css";

// Import Translations
import {
  type,
  cycle,
  careLevel,
  watering,
  sunlight,
  maintenance,
  growthRate,
  floweringSeason,
} from "../../constants/translations";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// -------- Importing Images -----------
import Image from "next/image";
import plantCardImage from "../../../public/images/PlantInfoCard__image.png";
import wateringIcon from "../../../public/images/watering_blueicon.png";
import lightingIcon from "../../../public/images/solarLight_icon.png";
import growthIcon from "../../../public/images/growth_icon.png";
import maintenanceIcon from "../../../public/images/maintance_icon.png";
import colorLeafsIcon from "../../../public/images/leafs_icon.png";
import floweringIcon from "../../../public/images/flowering_icon.png";
import toxicityIcon from "../../../public/images/toxicity_Icon.png";
import closeButton from "../../../public/images/Close-Icon.png";

export default function OpenedPlantInfoCard({ onClose, selectedPlant }) {
  // Agregar el listener para cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        onClose(); // Llamar la función onClose para cerrar el popup si se presiona Escape
      }
    };

    // Agregar el evento 'keydown' al documento
    document.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]); // Se vuelve a ejecutar si onClose cambia

  return (
    <>
      <section className={`${styles.OpenedPlantInfoCard__PopUp}`}>
        <div className={styles.OpenedPlantInfoCard}>
          <button
            className={styles.OpenedPlantInfoCard__button}
            onClick={onClose}
          >
            x
          </button>
          <Image
            src={selectedPlant?.default_image?.original_url || plantCardImage}
            alt={selectedPlant?.common_name || "Images of some indoors plants"}
            className={styles.OpenedPlantInfoCard_image}
            layout="responsive"
            width="900"
            height="600"
          ></Image>
          <h1
            className={`${poppins.className} ${styles.OpenedPlantInfoCard_name}`}
          >
            {selectedPlant?.common_name}
          </h1>

          <div className={styles.OpenedPlantInfoCard_Info_Details}>
            <p>
              <strong>Tipo de planta: </strong>
              {selectedPlant?.type
                ? type[selectedPlant.type.toLowerCase()] || selectedPlant.type
                : "Tipo no disponible"}
            </p>
            <p>
              <strong>Ciclo de vida: </strong>
              {selectedPlant?.cycle
                ? cycle[selectedPlant.cycle.toLowerCase()] ||
                  selectedPlant.cycle
                : "Ciclo no disponible"}
            </p>
            <p>
              <strong>Nivel de cuidado:</strong>{" "}
              {selectedPlant?.care_level
                ? careLevel[selectedPlant.care_level.toLowerCase()] ||
                  selectedPlant.care_level
                : "Nivel de cuidado no disponible"}
            </p>
          </div>

          <p className={styles.OpenedPlantInfoCard_Category}>
            {selectedPlant?.indoor
              ? "Planta de Interiores"
              : "Planta de Exteriores"}
          </p>

          <div className={styles.OpenedPlantInfoCard_grid}>
            {/* Watering Section  */}
            <div className={styles.OpenedPlantInfoCard_section}>
              <p
                className={`${inter.className} ${styles.OpenedPlantInfoCard__title}`}
              >
                Riego
              </p>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={wateringIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.PlantInfoCard__text}>
                  <strong>Frecuencia de riego:</strong>{" "}
                  {selectedPlant?.watering
                    ? watering[selectedPlant.watering.toLowerCase()] ||
                      selectedPlant.watering
                    : "Frecuencia de riego no disponible"}
                </p>
              </div>
            </div>

            {/* Ligthing Section  */}
            <div className={styles.OpenedPlantInfoCard_section}>
              <p
                className={`${inter.className} ${styles.OpenedPlantInfoCard__title}`}
              >
                Luz solar
              </p>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={lightingIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p
                  className={styles.PlantInfoCard__text}
                  dangerouslySetInnerHTML={{
                    __html: `
      <strong>Luz solar recomendada:</strong> ${
        selectedPlant?.sunlight
          ? selectedPlant.sunlight
              .map((light) => {
                const normalizedLight = light.toLowerCase().replace(/ /g, "_");
                return sunlight[normalizedLight] || light;
              })
              .join("<br />")
          : "Requisitos de luz solar no disponibles"
      }
    `,
                  }}
                ></p>
              </div>
            </div>

            {/* Growth Section  */}
            <div className={styles.OpenedPlantInfoCard_section}>
              <p
                className={`${inter.className} ${styles.OpenedPlantInfoCard__title}`}
              >
                Crecimiento y mantenimiento
              </p>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={growthIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.PlantInfoCard__text}>
                  <strong>Crecimiento: </strong>{" "}
                  {selectedPlant?.growth_rate
                    ? growthRate[selectedPlant.growth_rate.toLowerCase()] ||
                      selectedPlant.growth_rate
                    : "Velocidad de crecimiento no disponible"}
                </p>
              </div>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={maintenanceIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.PlantInfoCard__text}>
                  <strong>Mantenimiento:</strong>{" "}
                  {selectedPlant?.maintenance
                    ? maintenance[selectedPlant.maintenance.toLowerCase()] ||
                      selectedPlant.maintenance
                    : "Nivel de mantenimiento no disponible"}
                </p>
              </div>
            </div>

            {/* Plant Sctructure Section  */}
            <div className={styles.OpenedPlantInfoCard_section}>
              <p
                className={`${inter.className} ${styles.OpenedPlantInfoCard__title}`}
              >
                Estructura de la planta
              </p>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={colorLeafsIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.PlantInfoCard__text}>
                  <strong>Tiene hojas: </strong>{" "}
                  {selectedPlant?.leaf ? "Si" : "No"}
                </p>
              </div>

              <div className={styles.PlantInfoCard__info}>
                <Image
                  src={floweringIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.PlantInfoCard__text}>
                  <strong>Floración:</strong>{" "}
                  {selectedPlant?.flowers && selectedPlant?.flowering_season
                    ? `Sí, en ${
                        floweringSeason[
                          selectedPlant.flowering_season.toLowerCase()
                        ]
                      }` // Traduce la temporada
                    : "No"}
                </p>
              </div>
            </div>
          </div>
          {/* Toxicity Section  */}
          <div className={styles.OpenedPlantInfoCard_Toxicitysection}>
            <p
              className={`${inter.className} ${styles.OpenedPlantInfoCard_Toxicitysection__title}`}
            >
              Toxicidad
            </p>
            <div
              className={styles.OpenedPlantInfoCard_Toxicitysection__Content}
            >
              <div className={styles.OpenedPlantInfoCard_Toxicitysection__info}>
                <Image
                  src={toxicityIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.OpenedPlantInfoCard_Toxicitysection__text}>
                  <strong>¿Tóxica para humanos? </strong>{" "}
                  {selectedPlant?.poisonous_to_humans ? "Si" : "No"}
                </p>
              </div>
              <div className={styles.OpenedPlantInfoCard_Toxicitysection__info}>
                <Image
                  src={toxicityIcon}
                  alt="Images of some indoors plants"
                  className={styles.PlantInfoCard__icon}
                ></Image>
                <p className={styles.OpenedPlantInfoCard_Toxicitysection__text}>
                  <strong>¿Tóxica para mascotas?</strong>{" "}
                  {selectedPlant?.poisonous_to_pets ? "Si" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
