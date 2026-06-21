import type { ReactNode } from "react";

type TallyPopupButtonProps = {
  children: ReactNode;
  className: string;
  formId?: string;
};

export function TallyPopupButton({
  children,
  className,
  formId = "MeGLOX",
}: TallyPopupButtonProps) {
  return (
    <button
      type="button"
      className={className}
      data-tally-open={formId}
      data-tally-layout="modal"
    >
      {children}
    </button>
  );
}
