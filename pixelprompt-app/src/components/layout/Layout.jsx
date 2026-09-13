import { Outlet } from "react-router-dom";
import { ActiveSectionProvider } from "../../context/ActiveSectionContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomBar from "./BottomBar";
import CustomCursor from "../shared/CustomCursor";

export default function Layout() {
  return (
    <ActiveSectionProvider>
      <div className="grain-overlay flex min-h-screen flex-col">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BottomBar />
      </div>
    </ActiveSectionProvider>
  );
}
