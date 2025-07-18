
import { Rocket } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const RiseCohort1 = () => {
  useSeo(
    "RISE Cohort 1 | AITAM RISE Programs",
    "Information about our inaugural incubation cohort. Stay tuned for updates on our first batch of innovators at AITAM RISE."
  );

  return (
    <>
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
            RISE <span className="text-accent">Cohort 1</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Information about our inaugural incubation cohort will be available soon. Stay tuned for updates on our first batch of innovators!</p>
        </div>
      </section>
      <section className="section-padding">
            <div className="container-custom text-center">
                <Rocket className="h-24 w-24 text-primary/20 mx-auto"/>
                <p className="mt-4 text-muted-foreground">Coming Soon...</p>
            </div>
      </section>
    </>
  );
};

export default RiseCohort1;