import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT && !isMobile) {
        setIsMobile(true);
      }

      if (window.innerWidth >= MOBILE_BREAKPOINT && isMobile) {
        setIsMobile(false);
      }
    };

    onChange();

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [isMobile]);

  return isMobile;
}
