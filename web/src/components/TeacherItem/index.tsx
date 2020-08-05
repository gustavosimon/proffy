import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/25882357?s=460&u=5c2c5f0a5a94e7a7c95737c93c53867aa4f57860&v=4"
          alt="Gustavo Simon"
        />
        <div>
          <strong>Gustavo Simon</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Programador; Analista de testes; Pesquisador de segurança da informação;
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
