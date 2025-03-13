import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="profile-pic" />
      <h2>Bruno Fraga</h2>
      <p>Desenvolvedor Full Stack</p>
      <div className="contact-info">
        <p>Email: brunofraga@email.com</p>
        <p>Localização: Sua Cidade, Brasil</p>
        <p>Telefone: (99) 99999-9999</p>
      </div>
    </aside>
  );
};

export default Sidebar;