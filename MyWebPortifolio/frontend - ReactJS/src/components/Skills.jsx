import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills">
      
      <div className="skills-container">
        {/* Coluna 1: Skills */}
        <div className="skills-section">
          <h3>No Frontend desenvolvo com:</h3>
          <div className="skills-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" />
            <img src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
            <img src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_1280.png" />
          </div>

          <h3>No Backend desenvolvo com:</h3>
          <div className="skills-img">
            <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WYHLYIVN011VGVl1pkwPRrAGWPBbG25YrQ&s" />
            <img src="https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png" />
            <img src="https://media.licdn.com/dms/image/v2/D4E12AQF64SYsV08fkA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1662093619580?e=2147483647&v=beta&t=uoidKIOEIH0ZlboxixU1Lfkg5rPnYoCizMrA7P-YVQ4" />
          </div>
        </div>

        {/* Coluna 2: Texto Alternativo */}
        <div className="skills-text">
          <p>
            No desenvolvimento frontend, utilizo tecnologias modernas para criar
            interfaces interativas e responsivas. Trabalho com React.js e Vue.js, 
            além de HTML5 e CSS3 para estruturar e estilizar as páginas. 
          </p>
          <p>
            Para tornar o design dinâmico e responsivo, incorporo Tailwind CSS e 
            Bootstrap. No backend, utilizo Spring Boot com Java, garantindo 
            escalabilidade e segurança. Para armazenar dados, trabalho com 
            MySQL e JPA.
          </p>
          <p>
            Minha stack de desenvolvimento permite criar aplicações completas e 
            otimizadas, garantindo eficiência, performance e uma experiência fluida 
            para os usuários. 🚀✨
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
