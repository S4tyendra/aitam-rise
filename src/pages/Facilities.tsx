
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building,
  Printer,
  Cpu,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";

const Facilities = () => {
  useSeo(
    "Our Facilities | AITAM RISE Incubator",
    "Access our state-of-the-art facilities including a collaborative co-working space, Idealab for prototyping, and specialized deep-tech labs."
  );

  const facilities = [
    {
      icon: Users,
      title: "Co-working Space",
      description: "A vibrant, open-plan workspace designed for collaboration and innovation, with all the amenities you need to be productive.",
      link: "/facilities/co-working"
    },
    {
      icon: Sparkles,
      title: "Idealab",
      description: "Our central hub for creativity and rapid prototyping. Bring your ideas to life with access to cutting-edge tools and equipment.",
      link: "/facilities/idealab"
    },
    {
      icon: Cpu,
      title: "Specialized Labs",
      description: "Dedicated labs for deep-tech development in our key focus areas, equipped with high-performance computing and hardware.",
      link: "/facilities/labs"
    }
  ];

  return (
    
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              State-of-the-art infrastructure designed to foster creativity, collaboration, and cutting-edge technological development.
            </p>
          </div>
        </section>

        {/* Facilities Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                 <Card key={index} className="card-hover h-full flex flex-col">
                 <CardContent className="p-8 flex-1 flex flex-col">
                   <div className="mb-6 flex justify-center">
                     <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full">
                       <facility.icon className="h-10 w-10 text-accent" />
                     </div>
                   </div>
                   <h3 className="text-xl font-poppins font-semibold mb-4 text-center">{facility.title}</h3>
                   <p className="text-muted-foreground mb-6 leading-relaxed text-center flex-grow">{facility.description}</p>
                   <div className="mt-auto">
                     <Link to={facility.link}>
                       <Button variant="outline" className="w-full">
                         Learn More
                         <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                     </Link>
                   </div>
                 </CardContent>
               </Card>
              ))}
            </div>
          </div>
        </section>

      </div>
    
  );
};

export default Facilities;