import { useEffect, useMemo, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

const DURATION = 1150;

// Splits a stat string into its animatable number plus the surrounding text so
// suffixes/units and prefixes survive the tween: "3,200+" -> 3200 with grouping
// and a "+" suffix; "4.0/5" -> 4.0 (one decimal) with a "/5" suffix; a value
// with no digits (e.g. a placeholder) returns null and is rendered verbatim.
function parseStat(value) {
  const match = value.match(/\d[\d,]*(?:\.\d+)?/);
  if (!match) return null;
  const raw = match[0];
  const numeric = raw.replace(/,/g, "");
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  return {
    target: parseFloat(numeric),
    decimals,
    grouped: raw.includes(","),
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + raw.length),
  };
}

function formatStat(current, { decimals, grouped, prefix, suffix }) {
  let num = current.toFixed(decimals);
  if (grouped) {
    const [intPart, decPart] = num.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    num = decPart ? `${withCommas}.${decPart}` : withCommas;
  }
  return `${prefix}${num}${suffix}`;
}

// Animates a stat from 0 to its target when it scrolls into view (1150ms,
// cubic ease-out), honoring the reveal stagger delay. Non-numeric parts are
// preserved. Respects prefers-reduced-motion by rendering the final value.
export default function StatValue({ value, index = 0, className }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const parsed = useMemo(() => parseStat(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed && !reduced ? formatStat(0, parsed) : value
  );

  useEffect(() => {
    if (!parsed || reduced) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf;
    let timeout;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        timeout = setTimeout(() => {
          const start = performance.now();
          const tick = (now) => {
            if (cancelled) return;
            const t = Math.min((now - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(formatStat(parsed.target * eased, parsed));
            if (t < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, index * 105);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [parsed, reduced, value, index]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
