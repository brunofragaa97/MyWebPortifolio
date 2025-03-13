import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/global.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;