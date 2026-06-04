import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { NavGrid } from "@/components/nav-grid";
import { RedactedSection } from "@/components/redacted-section";
import { SupportSection } from "@/components/support-section";
import { SystemSection } from "@/components/system-section";

export default function Home() {
  return (
    <>
      <Header variant="hero" />

      <main className="bg-black text-zinc-100">
        <HeroSection />

        <div id="conteudo" className="max-w-7xl mx-auto px-6 pt-8 pb-24">
          <NavGrid />
          <AboutSection />
          <SupportSection />
          <SystemSection />
          <RedactedSection />
        </div>

        <Footer />
      </main>
    </>
  );
}
