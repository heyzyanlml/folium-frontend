"use client";
import { useState, useEffect } from "react";
import PlantSearcherHeader from "../../components/PlantSearcher/PlantSearcherHeader/PlantSearcherHeader";
import PlantSearcherMain from "../../components/PlantSearcher/PlantSearcherMain/PlantSearcherMain";
import FAQSection from "../../components/FAQSection/FAQSection";

export default function Page() {
  const [plantList, setPlantList] = useState([]);
  const [searchedPlant, setSearchedPlant] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  // Mostrar cartas de plantas iniciales
  useEffect(() => {
    async function getInitialPlants() {
      setisLoading(true);
      const response = await fetch(
        "https://perenual.com/api/v2/species-list?key=sk-pRtQ67a9a0360de2b8582"
      );

      const initialPlantList = await response.json();
      setPlantList(initialPlantList.data);
      setisLoading(false);
    }

    getInitialPlants();
  }, []);

  // Filtrar plantas por búsqueda
  async function getFilteredPlant(plantName) {
    const response = await fetch(
      `https://perenual.com/api/v2/species-list?key=sk-pRtQ67a9a0360de2b8582&q=${plantName}`
    );

    const filteredPlants = await response.json();
    console.log(filteredPlants);
    setPlantList(filteredPlants.data);
  }

  return (
    <div>
      <PlantSearcherHeader
        handleFilteredPlant={(evt) => getFilteredPlant(evt.target.value)}
      />
      <PlantSearcherMain
        plantList={plantList}
        isLoadingInitialPlants={isLoading}
      />
      <FAQSection />
    </div>
  );
}
