"use client";

import type { ReactNode } from "react";
import { TallyPopupButton } from "@/components/tally-popup-button";

const personalTaxEmbedUrl =
  "https://tally.so/embed/0QDjK6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const personalTaxFormUrl = "https://tally.so/r/0QDjK6";

type PersonalTaxQuoteButtonProps = {
  children: ReactNode;
  className: string;
};

export function PersonalTaxQuoteButton({
  children,
  className,
}: PersonalTaxQuoteButtonProps) {
  return (
    <TallyPopupButton
      className={className}
      embedUrl={personalTaxEmbedUrl}
      formUrl={personalTaxFormUrl}
      eyebrow="Personal income tax"
      title="Get a personal return quote"
      iframeTitle="Personal income tax quote questionnaire"
      closeLabel="Close personal return quote form"
    >
      {children}
    </TallyPopupButton>
  );
}
