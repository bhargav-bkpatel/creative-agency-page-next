import ServicesCard from "../services-card";

const Homecard = () => {
  return (
    <>
      <ServicesCard></ServicesCard>
      <ServicesCard
        text="Copy-writting"
        image_src="/playground_assets/file-document-200w.png"
      ></ServicesCard>
      <ServicesCard
        text="Product Design"
        image_src="/playground_assets/dice-5-200h.png"
      ></ServicesCard>
    </>
  );
};
export default Homecard