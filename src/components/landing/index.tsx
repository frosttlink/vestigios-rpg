import { ArgTeaserSection } from "./arg-teaser-section";
import { LANDING_FEATURES } from "./config";
import { FaqSection } from "./faq-section";
import { LibraryHighlightSection } from "./library-highlight-section";

export function LandingHighlights() {
  return (
    <>
      {LANDING_FEATURES.library && <LibraryHighlightSection />}
      {LANDING_FEATURES.argTeaser && <ArgTeaserSection />}
    </>
  );
}

export function LandingClosing() {
  if (!LANDING_FEATURES.faq) return null;

  return <FaqSection />;
}
