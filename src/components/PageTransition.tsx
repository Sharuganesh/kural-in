import { useEffect, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Trigger enter animation on mount
    if (divRef.current) {
      divRef.current.style.animation = "pageEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
    }
  }, []);

  return (
    <div ref={divRef} className="page-content">
      {children}
    </div>
  );
}
