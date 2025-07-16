
import { Award, Lightbulb, Rocket } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Mission = () => {
  useSeo(
    "Our Mission | AITAM RISE Incubator",
    "Learn about our mission to foster a culture of innovation by encouraging, inspiring, and nurturing student ideas into scalable businesses."
  );

  return (
    
      <div className="overflow-hidden">
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Mission</span>
            </h1>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-20 w-20 text-accent mx-auto mb-4" />
              <p className="text-2xl md:text-3xl font-poppins font-medium text-foreground leading-snug">
                To systematically foster a culture of innovation by encouraging, inspiring, and nurturing young students; supporting them to work with new ideas and transform them into market-ready prototypes and scalable businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-accent" /> Encourage & Inspire</h3>
                <p className="text-muted-foreground">We run programs like Ideathons and Problemathons to spark creativity and encourage students to think outside the box and identify real-world problems.</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center"><Rocket className="mr-2 h-5 w-5 text-accent" /> Nurture & Support</h3>
                <p className="text-muted-foreground">Through structured incubation and mentorship, we provide the essential support system to help turn promising ideas into successful, market-ready ventures.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  );
};

export default Mission;