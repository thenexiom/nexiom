"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  className?: string;
  height?: number;
  dark?: boolean;
};

export default function NexiomLogo({ className = "", height = 36, dark = false }: Props) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <Image
        src="/nexiom-logo.png"
        alt="Nexiom"
        width={height * 3}
        height={height}
        className={`h-auto object-contain ${dark ? "brightness-0 invert" : ""} ${className}`}
        style={{ height: `${height}px`, width: "auto" }}
        onError={() => setImgError(true)}
        priority
      />
    );
  }

  // SVG fallback
  const textColor = dark ? "#ffffff" : "#1E2B3A";
  return (
    <svg
      height={height}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="lg-fallback" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6A7" />
          <stop offset="50%" stopColor="#00A3D7" />
          <stop offset="100%" stopColor="#4A6CF7" />
        </linearGradient>
      </defs>
      {/* N mark */}
      <rect x="0" y="4" width="32" height="32" rx="8" fill="url(#lg-fallback)" />
      <text x="6" y="26" fontFamily="system-ui" fontWeight="800" fontSize="20" fill="white">N</text>
      {/* Nexiom text */}
      <text x="40" y="28" fontFamily="system-ui" fontWeight="700" fontSize="22" fill={textColor} letterSpacing="-0.5">
        Nexiom
      </text>
    </svg>
  );
}
