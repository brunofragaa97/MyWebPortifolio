import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/home.css";
import Modal from "../components/Modal";
import ModalApresentacao from "../components/ModalApresentacao";

const Home = () => {
  const [activeModalContent, setActiveModalContent] = useState(null);

  useEffect(() => {
    setActiveModalContent(1);
  }, []);

  const openModal = (index) => {
    setActiveModalContent(index);
  };

  const closeModal = () => {
    setActiveModalContent(null);
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        {/* Modal 1 */}
        <Modal isOpen={activeModalContent === 1} onClose={closeModal}>
          <div>
            <ModalApresentacao />
          </div>
        </Modal>
        {/* Modal 2 movido para cá */}
        <Modal isOpen={activeModalContent === 2} onClose={closeModal}>
          <About />
        </Modal>
        <Sidebar />
        <main className="main-content">
          <section className="section-about" id="about" onClick={() => openModal(2)}>
            Quem é Bruno de Fraga?
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;