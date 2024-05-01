'use client'
import React from "react";
import { ReactDOM } from "react";
import Navigation from "./Components/Nav/navigation";
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
    <main className="main-body">
      <Navigation />
      <Footer />
    </main>
  );
}
