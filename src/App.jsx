import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { I18nextProvider } from 'react-i18next'; // Importa I18nextProvider
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import ColorPicker from "mf_colorpicker/ColorPicker";
import ColorList from "mf_colorlist/ColorList";
import useColors from "mf_colorpicker/useColors";
import Presentacion from "./Presentacion";
// import i18n (needs to be bundled ;))
import i18n from './i18n'; // Asegúrate de que la ruta es correcta


const App = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor } = useColors();

  // i18n hooks
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(lng);
  };
  
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {t('colorpicker')}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                  {t('colorpicker')}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/presentacion">
                  {t("presentacion")}
                  </Link>
                </li>
              </ul>
             
              {/* ===== SELECTOR DE IDIOMA ===== */}
              <div className="d-flex align-items-center ms-3">
                <select
                  className="form-select form-select-sm bg-dark text-white border-secondary"
                  style={{ width: "120px" }}
                  defaultValue={i18n.language}
                  onChange={handleLanguageChange}>
                  <option value="es">ESPAÑOL</option>
                  <option value="en">ENGLISH</option>
                </select>
              </div>
            </div>

              
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-4">
                <div className="row">
                  <div className="col-12 col-md-4 col-xl-4">
                    <ColorList lista={colorListado} />
                  </div>
                  <div className="col-12 col-md-4 col-xl-4">
                    <ColorPicker
                      color={color}
                      colorListado={colorListado}
                      handleChangeColor={handleChangeColor}
                      handleSubmitSaveColor={handleSubmitSaveColor}
                    />
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/presentacion" element={<Presentacion />} />
        </Routes>
      </div>
    </Router>
  );
};

// Envuelve App con I18nextProvider y pasa la instancia de i18n
const AppWithProvider = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById("app"));