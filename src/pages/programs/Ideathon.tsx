import Layout from "@/components/Layout";
import { Lightbulb } from "lucide-react";

const Ideathon = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
            Ideathon
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">An intensive, collaborative event where teams brainstorm and develop innovative solutions to specific challenges, culminating in a pitch presentation.</p>
        </div>
      </section>
       <section className="section-padding">
            <div className="container-custom text-center">
                <Lightbulb className="h-24 w-24 text-primary/20 mx-auto"/>
                <p className="mt-4 text-muted-foreground">Details about our next Ideathon will be announced soon. Check our News & Events page for updates.</p>
            </div>
      </section>
    </Layout>
  );
};

export default Ideathon;