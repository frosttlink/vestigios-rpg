import { AboutSection } from "@/components/about-section";
import { CreditsSection } from "@/components/credits-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LandingClosing, LandingHighlights } from "@/components/landing";
import { NavGrid } from "@/components/nav-grid";
import { SystemSection } from "@/components/system-section";

export default function Home() {
  return (
    <>
      <Header variant="hero" />

      <main className="bg-black text-zinc-100">
        <HeroSection />

        <section className="relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black via-black/90 to-transparent" />

          <div
            id="conteudo"
            className="relative max-w-7xl mx-auto px-6 pt-8 pb-24"
          >
            <NavGrid />
            <AboutSection />
            <SystemSection />
            <LandingHighlights />
            <CreditsSection />
            <LandingClosing />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
