import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import MovieView from "./MovieView.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="" />
        <Route element={<MovieView />} path="/view/" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
