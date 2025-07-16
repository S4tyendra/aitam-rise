import Layout from "@/components/Layout";
import { Rocket, CheckCircle } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const IncubationSupport = () => {
  useSeo(
    "Incubation Support | AITAM RISE Services",
    "Our incubation program provides comprehensive support to build and launch your startup with dedicated resources and expert guidance."
  );

  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Incubation <span className="text-accent">Support</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Building and launching your startup with dedicated resources and expert guidance.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Rocket className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">For teams with a validated idea or a Minimum Viable Product (MVP), our incubation program provides the comprehensive support needed to build a market-ready product and a scalable business.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Offerings</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Dedicated Co-working Space and Lab Access</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Seed Funding and Investment Connections</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Legal, IP, and Compliance Support</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Technical Mentorship and Product Development</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Business Development and Go-to-Market Strategy</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default IncubationSupport;