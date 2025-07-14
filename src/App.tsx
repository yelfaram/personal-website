import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { DockDemo } from "./components/ui/dock";

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        <Router>
          <div className="min-h-screen bg-white dark:bg-slate-950">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <DockDemo />
          </div>
        </Router>
        <Analytics />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}

export default App;
