"use client";

import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

// ─── Configuration ────────────────────────────────────────────────────────────

/**
 * Set the wedding date here.
 * The time is interpreted in Bogotá, Colombia (UTC-5).
 *
 * Format: "YYYY-MM-DDTHH:mm:ss"
 */
const WEDDING_DATE_BOGOTA = "2026-11-14T17:00:00";

// UTC-5 offset in minutes
const BOGOTA_OFFSET_MINUTES = -5 * 60;

// ─── Pure helpers (Single Responsibility) ─────────────────────────────────────

/**
 * Converts the Bogotá-local wedding date string into a UTC timestamp (ms).
 */
function parseBogotaDate(localDateStr: string): number {
  // Parse as if it were UTC, then shift by Bogotá's offset
  const asUTC = new Date(`${localDateStr}Z`).getTime();
  return asUTC - BOGOTA_OFFSET_MINUTES * 60 * 1000;
}

/**
 * Computes the remaining time between now and the target UTC timestamp.
 */
function computeTimeRemaining(targetMs: number): TimeRemaining {
  const nowMs = Date.now();
  const diffMs = targetMs - nowMs;

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

// ─── Sub-components (Single Responsibility, Open/Closed) ─────────────────────

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="countdown-unit">
      <div className="countdown-number"><p>{pad(value)}</p></div>
      <div className="countdown-label">{label}</div>
    </div>
  );
}

function Separator() {
  return <div className="countdown-separator">:</div>;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WeddingCountdown() {
  const targetMs = parseBogotaDate(WEDDING_DATE_BOGOTA);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() =>
    computeTimeRemaining(targetMs)
  );

  useEffect(() => {
    const tick = () => setTimeLeft(computeTimeRemaining(targetMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (timeLeft.isPast) {
    return (
      <div className="countdown-wrapper">
        <p className="countdown-past">¡Hoy es el gran día! 🎊</p>
      </div>
    );
  }

  return (
    <section className="countdown-wrapper">
      {/* Decorative header */}      
      {/* Counter grid */}
      <div className="countdown-grid">
        <CountdownUnit value={timeLeft.days} label="Días" />
        <Separator />
        <CountdownUnit value={timeLeft.hours} label="Horas" />
        <Separator />             
        <CountdownUnit value={timeLeft.minutes} label="Minutos" />
        <Separator />
        <CountdownUnit value={timeLeft.seconds} label="Segundos" />
      </div>

      {/* Decorative footer */}
      <p className="countdown-footnote">Hora de Bogotá · Colombia</p>
    </section>
  );
}