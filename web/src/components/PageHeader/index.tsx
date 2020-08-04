import React, { ReactHTML } from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import { title } from "process";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong></strong>
      </div>
    </header>
  );
};

export default PageHeader;
