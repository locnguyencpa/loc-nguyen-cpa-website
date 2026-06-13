"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

const tallyEmbedUrl =
  "https://tally.so/embed/MeGLOX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const tallyFormUrl = "https://tally.so/r/MeGLOX";

type TallyPopupButtonProps = {
  children: ReactNode;
  className: string;
};

export function TallyPopupButton({
  children,
  className,
}: TallyPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-navy/70 p-3 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex h-[min(860px,calc(100dvh-1.5rem))] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(20,48,58,.35)] sm:h-[min(860px,calc(100dvh-3rem))]"
          >
            <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4 sm:px-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.16em] text-teal">
                  IRS and state notice help
                </div>
                <h2 id={titleId} className="mt-1 font-serif text-2xl text-navy">
                  Request a notice review
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close notice review form"
                className="grid size-10 place-items-center rounded-full border border-navy/15 text-2xl leading-none text-navy hover:bg-sage"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <iframe
              src={tallyEmbedUrl}
              title="Request an IRS notice review"
              className="min-h-0 flex-1 border-0"
              allow="clipboard-write"
            />

            <div className="border-t border-navy/10 px-5 py-3 text-center text-xs text-slate">
              Trouble viewing the form?{" "}
              <a
                href={tallyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-teal underline"
              >
                Open it in a new tab
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
