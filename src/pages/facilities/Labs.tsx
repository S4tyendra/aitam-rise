import Layout from "@/components/Layout";
import { Cpu, CheckCircle } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Labs = () => {
  useSeo(
    "Specialized Labs | AITAM RISE Facilities",
    "Explore our dedicated deep-tech labs for AI/ML, IoT, and Robotics, designed to accelerate innovation in our key focus areas."
  );

  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Specialized <span className="text-accent">Labs</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Dedicated deep-tech labs to accelerate innovation in our key focus areas.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Cpu className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">For startups working on complex technological challenges, our specialized labs provide the high-performance computing power and equipment necessary for development and testing.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Our Labs</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> AI/ML Lab with High-Performance GPUs</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> IoT Lab with a wide range of Sensors and Kits</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Robotics & Automation Lab</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Secure Data Center for Hosting and Testing</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default Labs;