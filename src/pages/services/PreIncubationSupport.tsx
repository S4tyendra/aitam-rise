import Layout from "@/components/Layout";
import { Lightbulb, CheckCircle } from "lucide-react";

const PreIncubationSupport = () => {
  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Pre-incubation <span className="text-accent">Support</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Transforming your nascent idea into a validated business concept.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">This program is designed for aspiring entrepreneurs at the very beginning of their journey. We provide the tools and guidance needed to explore, refine, and validate your innovative ideas.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Offerings</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Ideation Workshops & Brainstorming Sessions</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Market Research & Validation Support</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Business Model Canvas Development</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Access to Problemathons and Ideathons</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Foundational Pitching Practice</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default PreIncubationSupport;