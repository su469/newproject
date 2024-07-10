import { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table";
import data from "./jsondata";
function App() {
  const [searchtext, setSearchText] = useState("");
  const [tableData, setTableData] = useState(data);
  const [pStart, setPStart] = useState("");
  console.log('pStart',pStart);
  const [pEnd, setPEnd] = useState("");
  const [soilLayers, setSoilLayers] = useState([""]);
  console.log("soilLayers", soilLayers);
  const handleInputChange = (event) => {
    const { value } = event?.target;
    setSearchText(value);
  };
  useEffect(() => {
    const serachWord = searchtext.toLowerCase();
    const filteredData = data.filter(
      (item) =>
        item.projectName.toLowerCase().includes(serachWord) ||
        item.createdDate.includes(serachWord) ||
        item.status.toLowerCase().includes(serachWord)
    );
    setTableData(filteredData);
  }, [searchtext]);

  const handleAddSoilLayer = () => {
    setSoilLayers([...soilLayers, ""]);
  };

  const handleSoilLayerChange = (index, value) => {
    console.log("index", index, value);
    const newSoilLayers = [...soilLayers];
    console.log("newSoilLayers", newSoilLayers);
    newSoilLayers[index] = value;
    setSoilLayers(newSoilLayers);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify({ pStart, pEnd, soilLayers });
    console.log("Submitted JSON:", jsonData);
  };

  return (
    <div className="App">
      <div className="maindiv">
        <h5 className="mainHeading">Projects</h5>
        <div className="secondDiv">
          <span className="secondHeading">Projects</span>
          <input
            class="form-control"
            type="text"
            placeholder="search..."
            aria-label="search..."
            value={searchtext}
            onChange={handleInputChange}
            className="inputBox"
          />
          <div className="newFormdiv">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdF4WITIxn9qlbAiJ5qsZtGoNk8bilPQggeg&s"
              width={15}
              height={15}
            />
            <span className="link">Create New</span>
          </div>
        </div>
        <div>
          <Table filteredData={tableData} />
        </div>
      </div>
      <div className="multiplierDiv">
        <div className="container">
          <h4>P Multiplier</h4>
          <div>
            <label>P Multiplier Start (float):</label>
            <input
              type="number"
              value={pStart}
              onChange={(e) => setPStart(e?.target?.value)}
            />
          </div>
          <div>
            <label>P Multiplier End:</label>
            <input
              type="number"
              value={pEnd}
              onChange={(e) => setPEnd(e?.target?.value)}
            />
          </div>
          <div>
            <label>Soil Layers:</label>
            {soilLayers.map((layer, index) => {
              console.log('layer',index);
              <input
                key={index}
                type="number"
                min="1"
                max="6"
                value={layer}
                onChange={(e) => handleSoilLayerChange(index, e.target.value)}
              />
       })}
           
          </div>
          <div className="buttonContainer">
          <button
              type="button"
              className="addButton"
              onClick={handleAddSoilLayer}
            >
              + Add Soil Layer
            </button>
            <button
              type="button"
              className="addButton"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
