import Layout from "@/components/Layout";
import { Sparkles, CheckCircle } from "lucide-react";

const Idealab = () => {
  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Idealab
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Our central hub for creativity, rapid prototyping, and hands-on innovation.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Sparkles className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">The Idealab is where concepts become tangible. Equipped with cutting-edge tools for design, fabrication, and testing, it's the perfect environment to bring your hardware and product ideas to life.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Equipment & Resources</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> High-Resolution 3D Printers & Scanners</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Precision Laser Cutters and Engravers</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Electronics Workbenches with Soldering Stations</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> A Suite of CAD and Design Software</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Technical Support and Safety Training</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default Idealab;