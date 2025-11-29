import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ColorPicker from "mf_colorpicker/ColorPicker";
import ColorList from "mf_colorlist/ColorList";
import useColors from "mf_colorpicker/useColors";
import Presentacion from "./Presentacion"; // Ajusta la ruta según donde esté tu componente Presentacion

const App = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor } = useColors();
  console.log(useColors());
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Color Picker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Color Picker</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/presentacion">Presentación</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="container mt-4">
              <div className="row">
                <div className="col-12 col-md-4 col-xl-4">
                  <ColorList lista={colorListado} />
                </div>
                <div className="col-12 col-md-4 col-xl-4">
                  <ColorPicker color={color} colorListado={colorListado} handleChangeColor={handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor} />
                </div>
              </div>
            </div>
          } />
          <Route path="/presentacion" element={<Presentacion />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));