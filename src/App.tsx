
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

// Lazy-loaded pages
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Startups = lazy(() => import("./pages/Startups"));
const Ecosystem = lazy(() => import("./pages/Ecosystem"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Apply = lazy(() => import("./pages/Apply"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Services = lazy(() => import("./pages/Services"));
const Facilities = lazy(() => import("./pages/Facilities"));

// Lazy-loaded sub-pages
const Vision = lazy(() => import("./pages/about/Vision"));
const Mission = lazy(() => import("./pages/about/Mission"));
const Governance = lazy(() => import("./pages/about/Governance"));
const Team = lazy(() => import("./pages/about/Team"));
const FocusAreas = lazy(() => import("./pages/about/FocusAreas"));

const PreIncubationSupport = lazy(() => import("./pages/services/PreIncubationSupport"));
const IncubationSupport = lazy(() => import("./pages/services/IncubationSupport"));
const Mentorship = lazy(() => import("./pages/services/Mentorship"));
const Networking = lazy(() => import("./pages/services/Networking"));
const FundingAssistance = lazy(() => import("./pages/services/FundingAssistance"));

const RiseCohort1 = lazy(() => import("./pages/programs/RiseCohort1"));
const Problemathon = lazy(() => import("./pages/programs/Problemathon"));
const Ideathon = lazy(() => import("./pages/programs/Ideathon"));

const Idealab = lazy(() => import("./pages/facilities/Idealab"));
const CoWorkingSpace = lazy(() => import("./pages/facilities/CoWorkingSpace"));
const Labs = lazy(() => import("./pages/facilities/Labs"));


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Delay hiding to prevent flash of unstyled content
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 200);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="fixed inset-0 bg-background flex justify-center items-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div></div>}>
            <Routes>
              {/* All pages that share the main layout are nested here */}
              <Route element={<Layout><Outlet /></Layout>}>
                <Route path="/" element={<Index />} />
                
                {/* About Us Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/about/vision" element={<Vision />} />
                <Route path="/about/mission" element={<Mission />} />
                <Route path="/about/governance" element={<Governance />} />
                <Route path="/about/team" element={<Team />} />
                <Route path="/about/focus-areas" element={<FocusAreas />} />

                {/* Services Routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/pre-incubation" element={<PreIncubationSupport />} />
                <Route path="/services/incubation" element={<IncubationSupport />} />
                <Route path="/services/mentorship" element={<Mentorship />} />
                <Route path="/services/networking" element={<Networking />} />
                <Route path="/services/funding" element={<FundingAssistance />} />

                {/* Programs Routes */}
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/rise-cohort-1" element={<RiseCohort1 />} />
                <Route path="/programs/problemathon" element={<Problemathon />} />
                <Route path="/programs/ideathon" element={<Ideathon />} />

                {/* Facilities Routes */}
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/facilities/idealab" element={<Idealab />} />
                <Route path="/facilities/co-working" element={<CoWorkingSpace />} />
                <Route path="/facilities/labs" element={<Labs />} />

                {/* Other Top-level Routes */}
                <Route path="/partners" element={<Ecosystem />} />
                <Route path="/startups" element={<Startups />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/apply" element={<Apply />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
