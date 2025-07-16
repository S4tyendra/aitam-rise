
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Team = () => {
    useSeo(
      "Management Team | AITAM RISE Incubator",
      "Meet the dedicated operational team managing AITAM RISE and directly supporting our startups on their journey."
    );

    const teamMembers = [
        {
          name: "Rish Kumar Devarasetti",
          role: "Incubator Program Director",
          department: "Program Management"
        },
        {
          name: "[Name]",
          role: "Operations Head",
          department: "Operations & Facilities"
        },
        {
          name: "[Name]",
          role: "Community Manager",
          department: "Ecosystem & Events"
        },
        {
          name: "[Name]",
          role: "Technical Lead",
          department: "Lab & Tech Support"
        },
      ];

  return (
    <>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Management <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">The dedicated team managing day-to-day operations and directly supporting our startups.</p>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((leader, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                  <div className="w-32 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <User className="h-12 w-12 text-primary/30" />
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

export default Team;