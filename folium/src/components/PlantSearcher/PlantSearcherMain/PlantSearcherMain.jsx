"use client";
import { useState, useEffect } from "react";
import styles from "./PlantSearcherMain.module.css";
import PlantInfoCard from "@/components/PlantInfoCard/PlantInfoCard";
import OpenedPlantInfoCard from "@/components/OpenedPlantInfoCard/OpenedPlantInfoCard";
import Loader from "../../Loader/Loader";
import NoResults from "@/components/NoResults/NoResults";

export default function PlantSearcherMain({
  plantList,
  isLoadingInitialPlants,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  const handleViewMore = async ({ id }) => {
    setIsOpened(true);
    setisLoading(true);
    console.log(id);

    const response = await fetch(
      `https://perenual.com/api/v2/species/details/${id}?key=sk-pRtQ67a9a0360de2b8582`
    );

    const plant = await response.json();
    setSelectedPlant(plant);
    setisLoading(false);
    console.log(plant);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  console.log(plantList);

  return (
    <>
      <section className={styles.PlantSearcherMain}>
        <div className={styles.PlantSearcherMain__container}>
          <div className={styles.PlantCard__container}>
            {isOpened && (
              <OpenedPlantInfoCard
                onClose={handleClose}
                selectedPlant={selectedPlant}
              />
            )}
            {(isLoading || isLoadingInitialPlants) && <Loader />}

            {plantList.length > 0 &&
              plantList.map((plant) => (
                <PlantInfoCard
                  key={plant.id}
                  plant={plant}
                  onViewMore={(id) => handleViewMore({ id })}
                />
              ))}

            {!isLoading &&
              !isLoadingInitialPlants &&
              plantList.length === 0 && <NoResults />}
          </div>
        </div>
      </section>
    </>
  );
}
