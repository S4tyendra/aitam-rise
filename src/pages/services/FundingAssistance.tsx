import Layout from "@/components/Layout";
import { DollarSign, CheckCircle } from "lucide-react";

const FundingAssistance = () => {
  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Funding <span className="text-accent">Assistance</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Navigating the funding landscape to fuel your startup's growth.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <DollarSign className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">Securing funding is a critical milestone for any startup. We provide comprehensive support to make your startup investor-ready and connect you with the right funding opportunities.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Offerings</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Pitch Deck Refinement and Storytelling</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Financial Modeling and Valuation Support</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Investor Readiness Training</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Access to our Angel Investor and VC Network</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Government Grant and Scheme Application Support</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default FundingAssistance;