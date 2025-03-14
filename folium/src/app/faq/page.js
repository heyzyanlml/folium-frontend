import PlantSearcherSection from "../../components/PlantSearcherSection/PlantSearcherSection";
import HeaderFAQ from "../../components/FAQ/HeaderFAQ/HeaderFAQ";
import AccordionSection from "../../components/FAQ/AccordionSection/AccordionSection";

export default function Page() {
  return (
    <div>
      <HeaderFAQ />

      <main>
        <AccordionSection />
        <PlantSearcherSection />
      </main>
    </div>
  );
}
