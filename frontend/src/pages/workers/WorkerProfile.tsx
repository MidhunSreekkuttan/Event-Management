import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Phone, Mail, MapPin, CheckCircle2, Upload } from "lucide-react";

const WorkerProfile = () => {
  const documents = [
    { name: "ID Proof", uploaded: true },
    { name: "Address Proof", uploaded: true },
    { name: "Resume (PDF, JPG)", uploaded: true },
  ];

  const skills = [
    { name: "Event Planning", checked: true },
    { name: "Client Coordination", checked: true },
    { name: "Vendor Management", checked: true },
    { name: "All Day Available", checked: true },
    { name: "Night Events", checked: false, highlight: true },
    { name: "Sunday Available", checked: false, highlight: true },
  ];

  const certifications = [
    "Event Planning",
    "Client Coordination",
    "Vendor Management",
    "First Aid Certified",
  ];

  return (
    <PageLayout breadcrumb="Workers / Profile">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl md:text-2xl font-semibold animate-fade-in">My Profile</h1>

        {/* Profile Header */}
        <Card className="shadow-sm card-hover animate-fade-in-up" style={{ animationDelay: "100ms", opacity: 0 }}>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <Avatar className="h-20 w-20 md:h-24 md:w-24 ring-4 ring-primary/10 transition-all duration-300 hover:ring-primary/30">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
                  <AvatarFallback className="text-xl md:text-2xl bg-primary/10 text-primary">JT</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold">John Thomas</h2>
                    <p className="text-muted-foreground text-sm md:text-base">Event Coordinator</p>
                    <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start flex-wrap">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        5 Star Rating
                      </Badge>
                      <span className="text-xs md:text-sm text-muted-foreground">3 - 5 Years Experience</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="btn-press">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm card-hover animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0 }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-sm group cursor-default">
              <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground">Mobile:</span>
              <span className="break-all">(+91), 9876543210</span>
            </div>
            <div className="flex items-center gap-3 text-sm group cursor-default">
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground">Email:</span>
              <span className="break-all">john.thomas@email.com</span>
            </div>
            <div className="flex items-start gap-3 text-sm group cursor-default">
              <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground flex-shrink-0">Full Address:</span>
              <span>123, Event Plaza, New York, NY 10001</span>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card className="shadow-sm card-hover animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0 }}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Documents</CardTitle>
              <Button variant="link" size="sm" className="text-primary btn-press">
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${400 + idx * 50}ms`, opacity: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox checked={doc.uploaded} className="data-[state=checked]:bg-primary" />
                    <span className="text-sm">{doc.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600">Uploaded</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 p-3 border border-dashed rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer group">
                <Upload className="h-4 w-4 group-hover:animate-bounce-subtle" />
                <span className="text-sm">Upload more documents</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills and Availability */}
        <Card className="shadow-sm card-hover animate-fade-in-up" style={{ animationDelay: "400ms", opacity: 0 }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Skills & Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/30 transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${500 + idx * 50}ms`, opacity: 0 }}
                >
                  <Checkbox 
                    checked={skill.checked} 
                    className={skill.highlight ? "border-red-400 data-[state=checked]:bg-red-500" : "data-[state=checked]:bg-primary"} 
                  />
                  <span className={`text-sm ${skill.highlight && !skill.checked ? "text-red-500" : ""}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications List */}
        <Card className="shadow-sm card-hover animate-fade-in-up" style={{ animationDelay: "500ms", opacity: 0 }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {certifications.map((cert, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${600 + idx * 50}ms`, opacity: 0 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
            
            <p className="mt-6 text-xs text-muted-foreground">
              Last Updated: April 22, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WorkerProfile;