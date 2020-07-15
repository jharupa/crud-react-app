import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerCoponent from "./components/ContainerCoponent";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          CRUD - React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </nav>

      <main role="main" className="container">
        <ContainerCoponent/>
      </main>
    </>
  );
}

export default App;
