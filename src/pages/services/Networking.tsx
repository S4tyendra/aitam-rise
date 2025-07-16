import Layout from "@/components/Layout";
import { Handshake, CheckCircle } from "lucide-react";

const Networking = () => {
  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Networking
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Building the connections that matter for your startup's success.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Handshake className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">We believe that a strong network is a startup's greatest asset. AITAM RISE provides unparalleled access to a vibrant ecosystem of innovators, investors, corporate partners, and alumni.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Offerings</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Exclusive Investor Demo Days</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Curated Industry and Corporate Mixers</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Vibrant Community Events and Workshops</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Warm Introductions to Strategic Partners</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Access to the AITAM Alumni Network</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default Networking;