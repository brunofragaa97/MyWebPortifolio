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
import Modal from "../components/Modal";
import ModalApresentacao from "../components/ModalApresentacao";

const Home = () => {

  const [activeModal, setActiveModal] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState(null);

  useEffect(() => {
    setActiveModal(true);
    setActiveModalContent(1)
  }, [])

  const openModal = (index) => {
    setActiveModalContent(index);
  };
  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <div className="container" onClick={closeModal}>
      <Header />
      <div className="content">
        { activeModal && <Modal isOpen={activeModalContent===1} closeModal={closeModal}>
          <div>
            <ModalApresentacao />
          </div>
          </Modal>
          }
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