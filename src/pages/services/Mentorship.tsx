import Layout from "@/components/Layout";
import { Users, CheckCircle } from "lucide-react";

const Mentorship = () => {
  return (
    <Layout>
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Mentorship
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">Connecting you with industry leaders to guide your entrepreneurial journey.</p>
          </div>
        </section>
        <section className="section-padding">
            <div className="container-custom max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Users className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">Our mentorship program is the cornerstone of our support system. Gain invaluable insights from a curated network of successful entrepreneurs, seasoned industry executives, and subject matter experts.</p>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Key Offerings</h2>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> One-on-One Mentoring Sessions</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Expert-in-Residence Office Hours</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Peer-to-Peer Founder Circles</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Specialized Technical and Business Guidance</li>
                    <li className="flex items-center"><CheckCircle className="h-6 w-6 text-accent mr-3" /> Access to our Global Mentor Network</li>
                </ul>
            </div>
        </section>
    </Layout>
  );
};

export default Mentorship;