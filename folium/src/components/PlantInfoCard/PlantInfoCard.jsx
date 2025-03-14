// -------- Importing Fonts -----------
import { Poppins, Jost } from "next/font/google";
import styles from "./PlantInfoCard.module.css";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// -------- Importing Images -----------
import Image from "next/image";
import plantCardImage from "../../../public/images/PlantInfoCard__image.png";
import wateringIcon from "../../../public/images/watering_icon.png";
import lightingIcon from "../../../public/images/lighting_icon.png";

export default function PlantInfoCard({ onViewMore, plant }) {
  return (
    <>
      <div className={styles.PlantInfoCard}>
        <Image
          src={plant?.default_image?.original_url || plantCardImage}
          alt={plant?.common_name || "Images of some indoors plants"}
          width={284}
          height={186}
          className={styles.PlantInfoCard_image}
        ></Image>
        <h1 className={styles.PlantInfoCard_name}>{plant.common_name}</h1>

        <a
          className={styles.PlantInfoCard__button}
          onClick={() => onViewMore(plant.id)}
        >
          Leer más
        </a>
      </div>
    </>
  );
}
