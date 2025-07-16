
import { Brain, Cpu, Printer, GraduationCap, CreditCard, Heart } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const FocusAreas = () => {
    useSeo(
      "Focus Areas | AITAM RISE Incubator",
      "We provide specialized support for startups in high-impact technology sectors like AI/ML, IoT, EdTech, FinTech, and Social Impact."
    );

    const thematicAreas = [
        {
          icon: Brain,
          title: "Machine Learning & AI",
          description: "Developing intelligent systems, data analytics solutions, and AI-powered applications.",
          gradient: "from-purple-500 to-blue-600"
        },
        {
          icon: Cpu,
          title: "Internet of Things (IoT)",
          description: "Creating connected devices, smart systems, and sensor networks for various industries.",
          gradient: "from-blue-500 to-cyan-600"
        },
        {
          icon: Printer,
          title: "3D Design & Prototyping",
          description: "Innovating in additive manufacturing, rapid prototyping, and custom product design.",
          gradient: "from-green-500 to-teal-600"
        },
        {
          icon: GraduationCap,
          title: "EdTech",
          description: "Transforming education through technology, personalized learning, and accessible platforms.",
          gradient: "from-orange-500 to-red-600"
        },
        {
          icon: CreditCard,
          title: "FinTech",
          description: "Revolutionizing financial services with secure, efficient, and innovative technology solutions.",
          gradient: "from-indigo-500 to-purple-600"
        },
        {
          icon: Heart,
          title: "Social Impact",
          description: "Leveraging technology to address societal challenges in healthcare, environment, and accessibility.",
          gradient: "from-pink-500 to-rose-600"
        }
    ];

    return (
    <>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our Focus <span className="text-accent">Areas</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">We provide specialized support and resources for startups in these high-impact technology sectors.</p>
          </div>
        </section>
        
        <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicAreas.map((area, index) => (
              <div key={index} className="focus-card p-6">
                <div className="mb-4 flex">
                  <div className={`p-3 bg-gradient-to-br ${area.gradient} rounded-lg`}>
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusAreas;