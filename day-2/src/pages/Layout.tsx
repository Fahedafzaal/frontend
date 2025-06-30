import type { ReactNode } from "react";
import HeaderComponent from "../components/Header-2";
import FooterComponent from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[1170px] mx-auto">
      <HeaderComponent />
      <main className="flex flex-col md:flex-row gap-16 md:gap-32 mt-12 md:mt-24 w-full">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
}

export default Layout;
