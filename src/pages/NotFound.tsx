
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 py-24">
      {/* Background gradient elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-blue-glow/10 to-transparent opacity-30 blur-3xl z-0" />
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-purple-glow/10 to-transparent opacity-30 blur-3xl z-0" />
      
      <div className="glass-card p-12 rounded-2xl max-w-lg w-full text-center animate-fade-in">
        <h1 className="text-7xl font-bold text-gradient mb-6">404</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="mx-auto"
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
