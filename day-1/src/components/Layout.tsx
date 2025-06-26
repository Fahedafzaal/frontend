import type { ReactNode } from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
}

export default Layout;
