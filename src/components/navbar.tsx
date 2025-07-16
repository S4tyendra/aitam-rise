import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { 
  InfoIcon, 
  ChevronDown,
  Building,
  ExternalLink,
  Briefcase,
  Calendar,
  MapPin,
  Handshake,
  BookOpen,
  Star,
  icons
} from "lucide-react"
import clsx from "clsx"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navigationLinks = [
  {
    label: "About Us",
    submenu: true,
    type: "description",
    icon: InfoIcon,
    items: [
      {
        href: "/about",
        label: "About AITAM Rise",
        description: "Learn about our mission and vision.",
      },
      {
        href: "/about/vision",
        label: "Vision",
        description: "Our vision for the future of innovation.",
      },
      {
        href: "/about/mission",
        label: "Mission",
        description: "Our mission to foster entrepreneurship.",
      },
      {
        href: "/about/governance",
        label: "Governance Council",
        description: "Meet our leadership team.",
      },
      {
        href: "/about/team",
        label: "Management Team",
        description: "Our dedicated management team.",
      },
      {
        href: "/about/focus-areas",
        label: "Focus Areas",
        description: "Our key areas of expertise.",
      },
    ],
  },
  {
    label: "Services",
    submenu: true,
    type: "simple",
    icon: Briefcase,
    items: [
      { href: "/services/pre-incubation", label: "Pre-incubation Support" },
      { href: "/services/incubation", label: "Incubation Support" },
      { href: "/services/mentorship", label: "Mentorship" },
      { href: "/services/networking", label: "Networking" },
      { href: "/services/funding", label: "Funding Assistance" },
    ],
  },
  {
    label: "Programs",
    submenu: true,
    type: "simple",
    icon: BookOpen,
    items: [
      { href: "/programs/rise-cohort-1", label: "RISE Cohort 1" },
      { href: "/programs/problemathon", label: "Problemathon" },
      { href: "/programs/ideathon", label: "Ideathon" },
    ],
  },
  {
    label: "Facilities",
    submenu: true,
    type: "simple",
    icon: Building,
    items: [
      { href: "/facilities/idealab", label: "Idealab" },
      { href: "/facilities/co-working", label: "Co-working Space" },
      { href: "/facilities/labs", label: "Labs" },
    ],
  },
  { href: "/partners", label: "Partners", icon: Handshake },
  { href: "/news-events", label: "News & Events", icon: Calendar },
  { href: "/testimonials", label: "Testimonials", icon: Star },
]

// NavLink Component
const NavLink = ({ href, external, children, onClick, isFirst, isLast, className, isLoading }) => {
  const baseClasses = "block px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const radiusClasses = clsx({ 'rounded-t-2xl': isFirst, 'rounded-b-2xl': isLast });
  const stateClasses = "hover:bg-slate-200/60";

  const content = (
    <div className="flex items-center justify-between">
      <span className={clsx(
        'flex items-center gap-2',
        isLoading ? 'header-animation' : 'text-slate-800'
      )}>
        {children}
      </span>
      {external && <ExternalLink className="h-4 w-4 text-slate-500" />}
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(baseClasses, radiusClasses, stateClasses, className)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={clsx(baseClasses, radiusClasses, stateClasses, className)}
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

// Mobile Navigation Menu Component
const MobileNavMenu = ({ navigation, isOpen, onOpenChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [loadingItem, setLoadingItem] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveDropdown(null);
      setLoadingItem(null);
    }
  }, [isOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const handleLinkClick = (itemTitle) => {
    setLoadingItem(itemTitle);
    setTimeout(() => {
      onOpenChange();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="absolute top-full left-0 w-full xl:hidden bg-slate-50 border-t border-slate-200/80 z-50"
        >
          <LayoutGroup>
            <div className="max-h-[85vh] overflow-y-auto p-3 pb-8">
              <div className="space-y-0">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    layout="position"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`bg-white space-y-0 overflow-hidden shadow
                      ${index === 0 ? 'rounded-t-2xl border-t border-slate-300/30' : ''}
                      ${index === navigation.length - 1 ? 'rounded-b-2xl border-b border-slate-300/30' : ''}`
                    }
                  >
                    {item.submenu ? (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.99 }}
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-base font-semibold transition-colors text-slate-900"
                        >
                          <div className="flex items-center gap-3">
                            {item.icon && <item.icon className="h-5 w-5 text-slate-700" />}
                            <span>{item.label}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="h-5 w-5 text-slate-600" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="px-2 pb-2"
                            >
                              <div className="bg-slate-200 rounded-2xl overflow-hidden shadow-inner space-y-0">
                                {item.items.map((subItem, idx) => (
                                  <NavLink
                                    key={subItem.label}
                                    href={subItem.href}
                                    external={subItem.external}
                                    onClick={() => handleLinkClick(subItem.label)}
                                    isLoading={loadingItem === subItem.label}
                                    isFirst={idx === 0}
                                    isLast={idx === item.items.length - 1}
                                    className="bg-slate-200"
                                  >
                                    {subItem.label}
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        href={item.href}
                        onClick={() => handleLinkClick(item.label)}
                        isLoading={loadingItem === item.label}
                        className="bg-white"
                        external={false}
                        isFirst={true}
                        isLast={true}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && <item.icon className="h-5 w-5 text-slate-700" />}
                          <span>{item.label}</span>
                        </div>
                      </NavLink>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </LayoutGroup>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b px-4 md:px-6 bg-transparent relative">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2 w-full xl:w-auto">
          {/* Mobile menu trigger */}
          <Button
            className="group size-8 xl:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className={`origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                  isMobileMenuOpen ? 'translate-x-0 translate-y-0 rotate-[315deg]' : ''
                }`}
              />
              <path
                d="M4 12H20"
                className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
                  isMobileMenuOpen ? 'rotate-45' : ''
                }`}
              />
              <path
                d="M4 12H20"
                className={`origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
                  isMobileMenuOpen ? 'translate-y-0 rotate-[135deg] hidden' : ''
                }`}
              />
            </svg>
          </Button>

          {/* Main nav */}
          <div className="flex items-center gap-3">
            {/* Desktop Logo */}
            <Link to="/" className="text-primary hover:text-primary/90 hidden xl:block">
              <img src="/Aitam-RISE.png" alt="Aitam Rise Logo" className="size-16" />
            </Link>
            
            {/* Mobile Logo with Text */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }} 
              className="flex flex-1 items-center xl:hidden"
            >
              <Link to="/" className="flex items-center">
                <div className="flex flex-wrap text-[1px] text-pretty xl:text-base items-center">
                  <img src="/Aitam-RISE.png" alt="AITAM RISE Logo" className="size-12 sm:size-16 sm:w-16" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold truncate">AITAM RISE</p>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation menu */}
            <NavigationMenu viewport={false} className="max-xl:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                  asChild
                                >
                                  <Link to={item.href}>
                                    {/* Display label with description if present */}
                                    {link.type === "description" &&
                                    "description" in item ? (
                                      <div className="space-y-1">
                                        <div className="font-medium">
                                          {item.label}
                                        </div>
                                        <p className="text-muted-foreground line-clamp-2 text-xs">
                                          {item.description}
                                        </p>
                                      </div>
                                    ) : (
                                      <span>{item.label}</span>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium whitespace-nowrap"
                        asChild
                      >
                        <Link to={link.href}>
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavMenu 
        navigation={navigationLinks}
        isOpen={isMobileMenuOpen}
        onOpenChange={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}
