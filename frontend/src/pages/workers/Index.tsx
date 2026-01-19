import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, Users, Calendar, ClipboardList, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Worker Registration",
      description: "Register event staff with complete details and document uploads",
      link: "/register",
    },
    {
      icon: Calendar,
      title: "Event Assignments",
      description: "View and manage upcoming event assignments for workers",
      link: "/dashboard",
    },
    {
      icon: ClipboardList,
      title: "Profile Management",
      description: "Manage worker profiles, skills, and certifications",
      link: "/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:scale-110">
              <LayoutGrid className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">Event Manager</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/register">
              <Button variant="outline" size="sm" className="btn-press text-xs md:text-sm">
                Register
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="btn-press text-xs md:text-sm">
                Dashboard
              </Button>
            </Link>
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
              style={{ animationDelay: "100ms", opacity: 0 }}
            >
              A comprehensive platform for event management teams to register workers, 
              track assignments, and manage profiles all in one place.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "200ms", opacity: 0 }}
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto btn-press group">
                  Register as Worker
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto btn-press">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 
            className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-10 animate-fade-in"
            style={{ animationDelay: "300ms", opacity: 0 }}
          >
            Everything You Need
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <Link key={idx} to={feature.link}>
                <Card 
                  className="h-full card-hover cursor-pointer group animate-fade-in-up"
                  style={{ animationDelay: `${400 + idx * 100}ms`, opacity: 0 }}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2024 Event Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;