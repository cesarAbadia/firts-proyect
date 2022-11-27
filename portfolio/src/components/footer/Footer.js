import React from "react";
import Typical from "react-typical";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
      <div className="footer-info">
      <h2>César Andrés Abadía Dávila </h2>
        <span className="primary-text">
          {""}
          <h1>
            {""}
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                "Entusiasta Developer 🌇",
                500,
                "Dev Full Stack 💻",
                500,
                "Mern Stack Dev 🚄",
               500,
              ]}
            />
          </h1>
        </span>

        <p>Santiago de Cali</p>
        <p>telefono: 316 3710912</p>
        <p>Email: ceanabad@gmail.com</p>

        <div className="colz">
          <div className="colz-icon">
            <a href="https://github.com/seuz716">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://herramientasexcelaccesparacontadores.blogspot.com/">
              <i className="fab fa-blogger"></i>
            </a>
            <a href="https://www.instagram.com/cesarabadia2/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCy4U3DhNkBHwytod7fquQVQ">
              <i className="fab fa-youtube-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/cesar-andr%C3%A9s-abad%C3%ADa-d%C3%A1vila-b0a915203/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="design-by">Design By César Andrés Abadía </div>
      </div>
    </footer>
  );
};

export default Footer;
