import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import "../Styles/global.css";

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