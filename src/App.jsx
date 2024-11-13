import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./components/homee/Home";
import AppRouter from "./Router";
import Header from "./Header";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
