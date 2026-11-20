import { AboutSection } from "@/components/about-section";
import { CreditsSection } from "@/components/credits-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import {
  LandingArgTeaser,
  LandingClosing,
  LandingFunding,
  LandingLibrary,
} from "@/components/landing";
import { NavGrid } from "@/components/nav-grid";

export default function Home() {
  return (
    <>
      <Header variant="hero" />
      <LandingFunding />

      <main className="bg-black text-zinc-100">
        <HeroSection />

        <section className="relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black via-black/90 to-transparent" />

          <div
            id="conteudo"
            className="relative max-w-7xl mx-auto px-6 pt-6 pb-16"
          >
            <NavGrid />
            <AboutSection />
            <LandingLibrary />
            <LandingArgTeaser />
            <CreditsSection />
            <LandingClosing />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
