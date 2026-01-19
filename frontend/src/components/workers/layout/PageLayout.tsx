import { ReactNode } from "react";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumb?: string;
}

const PageLayout = ({ children, breadcrumb }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {breadcrumb && (
        <div className="border-b bg-card">
          <div className="container px-4 md:px-6 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>≡</span>
              <span>/ {breadcrumb}</span>
            </div>
          </div>
        </div>
      )}
      <main className="container px-4 md:px-6 py-6">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
