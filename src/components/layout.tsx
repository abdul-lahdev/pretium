// "use client";

// import React from "react";
// import { ThemeProvider } from "@material-tailwind/react";

// export function Layout({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider>{children}</ThemeProvider>;
// }

// export default Layout;

"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
