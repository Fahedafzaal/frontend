import type { ReactNode } from "react";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <HeaderComponent />
      <main>
        {children}
      </main>
      <FooterComponent />
    </div>
  );
}

export default Layout;
