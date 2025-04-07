// main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Impor dari react-router-dom
import "./styles/index.css";
import App from "./App.tsx";
import OrderPage from "./pages/order"; // Impor halaman Order

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);