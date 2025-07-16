import Layout from "@/components/Layout";
import { Target, Users, TrendingUp } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Vision = () => {
  useSeo(
    "Our Vision | AITAM RISE Incubator",
    "Discover our long-term vision to build a leading innovation ecosystem and transform AITAM into a hub for student-led entrepreneurship."
  );

  return (
    <Layout>
      <div className="overflow-hidden">
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Vision</span>
            </h1>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-20 w-20 text-accent mx-auto mb-4" />
              <p className="text-2xl md:text-3xl font-poppins font-medium text-foreground leading-snug">
                To build a leading innovation ecosystem that transforms AITAM into a hub for 
                student-led entrepreneurship and technological breakthroughs that impact society.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center"><Users className="mr-2 h-5 w-5 text-accent" /> Fostering Innovators</h3>
                <p className="text-muted-foreground">We envision a campus where every student with an idea feels empowered to pursue it, equipped with the skills and confidence to become a successful entrepreneur.</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-accent" /> Driving Economic Growth</h3>
                <p className="text-muted-foreground">Our goal is to be a key contributor to the regional economy by launching high-growth startups that create jobs and bring innovative solutions to the market.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Vision;