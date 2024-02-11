import { ReactElement } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="bg-brand-general-bg min-h-[calc(100vh-65px)] w-12/12">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
