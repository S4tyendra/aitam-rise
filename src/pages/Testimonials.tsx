import Layout from "@/components/Layout";

const Testimonials = () => {
  return (
    <Layout>
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful startups and entrepreneurs who have been part of the AITAM RISE journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Startup Founder</h3>
                <p className="text-sm text-muted-foreground">Tech Startup</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "AITAM RISE provided us with the perfect platform to transform our idea into a successful startup. The mentorship and resources were invaluable."
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                B
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Entrepreneur</h3>
                <p className="text-sm text-muted-foreground">Social Impact</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The ecosystem at AITAM RISE is incredible. From co-working spaces to funding opportunities, everything is designed to help startups succeed."
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                C
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Startup Co-founder</h3>
                <p className="text-sm text-muted-foreground">EdTech</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The networking opportunities and mentor connections through AITAM RISE opened doors we never thought possible for our startup."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
