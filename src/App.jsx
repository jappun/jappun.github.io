import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

const LegacyApp = lazy(() => import("./v1/App.jsx"));

const Favicon = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']");
    if (!link) return;
    const legacy = pathname.startsWith("/v1");
    link.href = legacy ? "/favicon.ico" : "/favicon-v2.png";
    link.type = legacy ? "image/x-icon" : "image/png";
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Favicon />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/v1"
          element={
            <Suspense fallback={null}>
              <LegacyApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
