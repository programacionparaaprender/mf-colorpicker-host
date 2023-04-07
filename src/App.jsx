import React from "react";
import ReactDOM from "react-dom";


import ColorPicker from "mf_colorpicker/ColorPicker";
import ColorList from "mf_colorlist/ColorList";
import useColors from "mf_colorpicker/useColors";

const App = () => {
  const { color, colorListado, handleChangeColor, handleSubmitSaveColor} = useColors();
  console.log(useColors());
  return (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
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
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
