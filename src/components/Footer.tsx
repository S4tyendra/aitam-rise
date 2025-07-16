import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Our Startups", href: "/startups" },
    { name: "Facilities", href: "/facilities" },
    { name: "Downloads / Resources", href: "/resources" }, // Added
    { name: "AITAM Main Site", href: "https://www.adityatekkali.edu.in/" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About AITAM RISE */}
          <div className="space-y-4">
            <img 
              src="/Aitam-RISE.png" 
              alt="AITAM RISE Incubator" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Fostering innovation and entrepreneurship at Aditya Institute of Technology and Management. 
              We transform ideas into market-ready solutions through mentorship, resources, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  AITAM RISE Incubation Center<br />
                  D Block, Aditya Institute of Technology and Management<br />
                  Kotturu, Tekkali, Srikakulam<br />
                  Andhra Pradesh-532201, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:iic@adityatekkali.edu.in"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  iic@adityatekkali.edu.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 XXXX-XXXXXX
                </span>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Connect</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Join our community and stay updated with the latest innovations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 AITAM RISE Incubator. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;