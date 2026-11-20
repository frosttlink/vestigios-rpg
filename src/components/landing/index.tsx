import { ArgTeaserSection } from "./arg-teaser-section";
import { LANDING_FEATURES } from "./config";
import { FaqSection } from "./faq-section";
import { FundingBar } from "./funding-bar";
import { LibraryHighlightSection } from "./library-highlight-section";

export function LandingFunding() {
  if (!LANDING_FEATURES.funding) return null;

  return <FundingBar />;
}

export function LandingLibrary() {
  if (!LANDING_FEATURES.library) return null;

  return <LibraryHighlightSection />;
}

export function LandingArgTeaser() {
  if (!LANDING_FEATURES.argTeaser) return null;

  return <ArgTeaserSection />;
}

export function LandingClosing() {
  if (!LANDING_FEATURES.faq) return null;

  return <FaqSection />;
}
