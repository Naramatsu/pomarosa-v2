"use client";

import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";

function BrokenImageIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-sage/30">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-cocoa/30"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

/** Product thumbnail with hover zoom + click-to-open lightbox dialog. */
export function MenuImage({ src, alt }: { src: string; alt: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [broken, setBroken] = useState(false);
  const t = useTranslations("UI");

  const open = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const onBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) close();
    },
    [close],
  );

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-cocoa/10 bg-sage/20 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-menu-green/40"
        aria-label={t("verImagenDe", { name: alt })}
      >
        {broken ? (
          <BrokenImageIcon />
        ) : (
          <>
            <Image
              src={`/menu/${src}`}
              alt={alt}
              fill
              sizes="64px"
              className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
              onError={() => setBroken(true)}
            />
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-sage/40" />
            )}
          </>
        )}
      </button>

      <dialog
        ref={dialogRef}
        onClick={onBackdropClick}
        className="m-auto rounded-3xl border border-cocoa/10 bg-cream p-4 shadow-2xl max-w-[90vw] max-h-[90vh]"
      >
        <div className="relative flex flex-col items-center">
          <button
            type="button"
            onClick={close}
            aria-label={t("cerrar")}
            className="absolute -top-1 -right-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md transition-colors hover:bg-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="h-4 w-4 text-cocoa"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          {broken ? (
            <div className="flex h-[40vh] w-[40vh] items-center justify-center rounded-2xl bg-sage/20">
              <BrokenImageIcon />
            </div>
          ) : (
            <Image
              src={`/menu/${src}`}
              alt={alt}
              width={600}
              height={600}
              className="h-auto max-h-[70vh] w-auto rounded-2xl object-contain"
              priority
            />
          )}
          <p className="mt-3 text-center font-display text-lg font-bold text-menu-green">
            {alt}
          </p>
        </div>
      </dialog>
    </>
  );
}
