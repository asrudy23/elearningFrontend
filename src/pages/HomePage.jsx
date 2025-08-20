// src/pages/HomePage.jsx
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { Partners } from "@/components/landing/partners";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="partners">
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  );
}