import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomBar from "./BottomBar";
import CustomCursor from "../shared/CustomCursor";
import { ScrollTrigger } from "../../lib/gsap";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className="grain-overlay flex min-h-screen flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
    </div>
  );
}

