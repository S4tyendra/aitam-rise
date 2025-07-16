import Layout from "@/components/Layout";
import { Zap } from "lucide-react";

const Problemathon = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
            Problemathon
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">A competitive event where participants identify and define real-world problems, laying the groundwork for innovative solutions.</p>
        </div>
      </section>
      <section className="section-padding">
            <div className="container-custom text-center">
                <Zap className="h-24 w-24 text-primary/20 mx-auto"/>
                <p className="mt-4 text-muted-foreground">Details about our next Problemathon will be announced soon. Check our News & Events page for updates.</p>
            </div>
      </section>
    </Layout>
  );
};

export default Problemathon;