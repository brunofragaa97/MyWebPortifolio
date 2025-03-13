import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="https://rollingstone.com.br/media/_versions/keanu_reeves_como_neo_em_matrix_divulgacao_widelg.jpg" alt="Profile" className="profile-pic" />
      <h2>Bruno Fraga</h2>
      <p>Desenvolvedor Backend Java</p>
      <div className="contact-info">
        <p>Email: brunofragaa97@gmail.com</p>
        <p>Florianopolis, Santa catarina, Brasil</p>
        <p>Telefone: (51) 98904-3802</p>
      </div>
    </aside>
  );
};

export default Sidebar;