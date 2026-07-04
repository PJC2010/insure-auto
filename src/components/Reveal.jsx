import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";
import styles from "./Reveal.module.css";

// Polymorphic scroll-reveal wrapper. Renders as `as` (default div) so it can
// stand in for a real grid/flex child without adding wrapper markup.
//
// "Lively" default: start at opacity 0 / translateY(26px), animate in over
// 720ms cubic-bezier(0.22,1,0.36,1) when scrolled into view (IntersectionObserver,
// threshold 0.2, rootMargin 0px 0px -8% 0px), revealed once then unobserved.
// Siblings stagger 105ms apart via the index prop.
export default function Reveal({
  as: Tag = "div",
  index = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const classes = [styles.reveal, visible && styles.revealed, className]
    .filter(Boolean)
    .join(" ");

  const style = reduced ? undefined : { transitionDelay: `${index * 105}ms` };

  return (
    <Tag ref={ref} className={classes} style={style} {...rest}>
      {children}
    </Tag>
  );
}
