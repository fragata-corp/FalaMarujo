import React from "react";

import "./styles.css";

export default function Login() {
  return (
    <div id="container">
      <form>
        <input type="email" className="txt" placeholder="Digite seu E-mail" />
        <input type="password" className="txt" placeholder="Digite sua Senha" />

        <input type="submit" className="btn" />
      </form>
    </div>
  );
}
