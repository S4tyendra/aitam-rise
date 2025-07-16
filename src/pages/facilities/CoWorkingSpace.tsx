
import { Users, CheckCircle } from "lucide-react";
import useSeo from "@/hooks/useSeo";

const CoWorkingSpace = () => {
  useSeo(
    "Co-working Space | AITAM RISE Facilities",
    "A vibrant and collaborative co-working environment at AITAM RISE, designed for productivity and community engagement for our startups."
  );

  return (
    <>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Co-working <span className="text-accent">Space</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">A vibrant and collaborative environment designed for productivity and community.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">Our co-working space is more than just a desk. It's a dynamic community hub where entrepreneurs, mentors, and innovators connect, collaborate, and create.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Amenities</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> 24/7 Secure Access for Incubated Startups</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> High-Speed Wi-Fi and Internet</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Bookable Private Meeting Rooms and Booths</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Flexible Seating and Dedicated Desks</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Event Space for Workshops and Mixers</li>
                </ul>
            </div>
        </section>
    </>
  );
};

export default CoWorkingSpace;