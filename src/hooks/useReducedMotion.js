import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

// Tracks the user's OS-level "reduce motion" preference so the motion layer
// (scroll reveal, count-up, ambient drift) can fall back to a static, final
// state instead of animating.
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const handler = (event) => setReduced(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
