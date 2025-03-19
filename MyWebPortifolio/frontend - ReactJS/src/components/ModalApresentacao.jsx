import "../styles/modalApresentacao.css"
import { useState } from "react";


const ModalApresentacao = () => {
    const [decolou, setDecolou] = useState(false);

    const handleClick = () => {
        setDecolou(true); // Altera o estado para iniciar a animação de decolagem
    };


    return (
        <div className="modal-apresentacao">
            <h2 className="titulo-apresentacao">Oi, sou Bruno de Fraga e este é o meu mundo.</h2>
            <p className="par-boas-vindas">  Bem-vindo ao meu portfólio!
                Desde que comecei a programar, descobri que cada linha de código é uma oportunidade de transformar ideias em soluções reais e inovadoras. Minha paixão pela tecnologia me impulsiona a enfrentar desafios e a buscar constantemente novas formas de unir criatividade com eficiência. Ao longo da minha trajetória, tive a chance de colaborar em projetos diversos, onde aprimorei minhas habilidades e aprendi a valorizar o equilíbrio entre design e funcionalidade.
                Este espaço reflete a minha jornada profissional e pessoal, reunindo projetos que demonstram meu compromisso com a qualidade e a inovação. Convido você a explorar meu universo, conhecer os desafios superados e celebrar as conquistas que cada projeto representa. Vamos juntos transformar o futuro através da tecnologia!
            </p>
            <p className={`span-emoji-final ${decolou ? 'decolando' : ''}`} 
                onClick={handleClick}>🚀</p>
        </div>
    )
}
export default ModalApresentacao;