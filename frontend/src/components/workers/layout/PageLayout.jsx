import Navbar from "./Navbar";

const PageLayout = ({ children, breadcrumb }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {breadcrumb && (
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>≡</span>
              <span>/ {breadcrumb}</span>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;