
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Governance = () => {
    useSeo(
      "Governance Council | AITAM RISE Incubator",
      "Meet the strategic leadership of the AITAM Institution's Innovation Council (IIC) guiding our innovation ecosystem."
    );

    const councilMembers = [
        {
          name: "Dr. K. Someswara Rao",
          role: "Director, AITAM",
          department: "Chairman, IIC"
        },
        {
          name: "Dr. Sateesh Kumar Gudla",
          role: "President, Institution's Innovation Council",
          department: "IIC Leadership"
        },
        {
          name: "[Name]",
          role: "Chief Innovation Officer",
          department: "Strategic Innovation"
        },
        {
          name: "[Name]",
          role: "Industry Representative",
          department: "External Advisor"
        }
      ];

  return (
    <>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Governance <span className="text-accent">Council</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">The strategic minds guiding the AITAM innovation ecosystem, ensuring alignment with our mission and national educational goals.</p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {councilMembers.map((leader, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-32 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-12 w-12 text-primary/30" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{leader.name}</h3>
                    <p className="text-accent font-medium mb-1">{leader.role}</p>
                    <p className="text-sm text-muted-foreground">{leader.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default Governance;