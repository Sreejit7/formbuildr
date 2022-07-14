import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ApplicationForm from "./examples/Application";
import ContactForm from "./examples/Contact";
import Examples from "./examples/Examples";
import SignUpForm from "./examples/SignUp";
import "./index.css";
import NotFound from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/examples/signup" element={<SignUpForm />} />
        <Route path="/examples/application" element={<ApplicationForm />} />
        <Route path="/examples/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
