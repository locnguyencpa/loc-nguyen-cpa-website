"use client";

import type { ReactNode } from "react";
import { TallyPopupButton } from "@/components/tally-popup-button";

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
      formId="0QDjK6"
    >
      {children}
    </TallyPopupButton>
  );
}
