import Layout from "@/components/Layout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
  Upload,
  User,
  Building,
  FileText,
  Lightbulb
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [applicationData, setApplicationData] = useState({
    founderName: "",
    email: "",
    phone: "",
    studentId: "",
    teamSize: "",
    startupName: "",
    pitch: "",
    problem: "",
    solution: "",
    market: "",
    description: "",
    program: "pre-incubation"
  });

  const faqs = [
    {
      question: "What happens after I submit my application?",
      answer: "After submission, our team reviews your application within 5-7 business days. If shortlisted, you'll be invited for a pitch presentation and interview with our selection committee."
    },
    {
      question: "How long is the typical review process?",
      answer: "The complete review process typically takes 2-3 weeks from application submission to final decision, including the pitch presentation and interview rounds."
    },
    {
      question: "What should be included in my pitch deck?",
      answer: "Your pitch deck should include: problem statement, solution overview, market analysis, business model, team introduction, financial projections, and funding requirements. Keep it to 10-12 slides maximum."
    },
    {
      question: "Can I apply if I'm not an AITAM student?",
      answer: "Currently, our programs are primarily for AITAM students, recent alumni (within 2 years), and faculty members. External applications are considered on a case-by-case basis."
    },
    {
      question: "Is there an application fee?",
      answer: "No, there is no application fee. All our programs are completely free for accepted participants."
    }
  ];

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Contact & <span className="text-accent">Apply</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to start your entrepreneurial journey? Get in touch with us or apply to our programs.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-6">Get in Touch</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input 
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input 
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          placeholder="Tell us more about your inquiry..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg mb-2">Address</h3>
                          <p className="text-muted-foreground">
                            AITAM RISE Incubation Center<br />
                            D Block, Aditya Institute of Technology and Management<br />
                            Kotturu, Tekkali, Srikakulam<br />
                            Andhra Pradesh-532201, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg mb-2">Email</h3>
                          <a 
                            href="mailto:iic@adityatekkali.edu.in"
                            className="text-accent hover:text-accent/80 transition-colors"
                          >
                            iic@adityatekkali.edu.in
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 9:00 AM - 1:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section id="apply" className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Apply to <span className="gradient-text">AITAM RISE</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your idea into a successful venture? Start your application process here.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-4">Application Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">1</div>
                        <div>
                          <h4 className="font-medium">Complete Application Form</h4>
                          <p className="text-sm text-muted-foreground">Fill out the comprehensive application with your startup details</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">2</div>
                        <div>
                          <h4 className="font-medium">Upload Pitch Deck</h4>
                          <p className="text-sm text-muted-foreground">Submit your presentation (PDF format, max 10MB)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">3</div>
                        <div>
                          <h4 className="font-medium">Review & Interview</h4>
                          <p className="text-sm text-muted-foreground">Present to our selection committee</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-4">Quick Application</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Founder Name" />
                        <Input placeholder="Email" type="email" />
                      </div>
                      <Input placeholder="Startup Name" />
                      <Textarea placeholder="One-sentence pitch" rows={2} />
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Upload Pitch Deck (PDF)</p>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-poppins font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;