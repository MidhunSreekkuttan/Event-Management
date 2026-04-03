import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/workers/ui/button";
import { LayoutGrid, ArrowRight } from "lucide-react";
import { useContext, useEffect } from "react";
import { workersContext } from "../../context/WorkersContext";
import Loader from "../../components/Loading";

const Index = () => {

  const { userData, authLoading } = useContext(workersContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (userData?.isAdminVerified === 'approved') {
      navigate("/workers/home")
    }
  }, [userData])

  return (

    <>

      {authLoading && <Loader />}

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:scale-110">
                <LayoutGrid className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Event Manager</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
                Manage Your Event Staff
                <span className="text-primary"> Effortlessly</span>
              </h1>
              <p
                className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in"
              >
                A comprehensive platform for event management teams to register workers,
                track assignments, and manage profiles all in one place.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in"
              >
                <Link to="/workers/registration">
                  <Button size="lg" className="w-full sm:w-auto btn-press group">
                    Register Worker Form
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 mt-8 border-t">
          <div className="container px-4 md:px-6 text-center text-xs md:text-sm text-muted-foreground">
            <p>© 2024 Event Manager. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </>

  );
};

export default Index;