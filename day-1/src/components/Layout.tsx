import type { ReactNode } from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[1152px] mx-auto min-h-screen">
      <HeaderComponent />
      <main className="w-full p-16 mx-auto">{children}</main>
      <FooterComponent />
    </div>
  );
}

export default Layout;
