/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from "react";
import EditorPanel from "./components/EditorPanel";
import PreviewUI from "./components/PreviewUI";

const DEFAULT_SETTINGS = {
  // typography
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: 18,

  // button
  buttonBg: "#C96A3E",
  buttonText: "#ffffff",
  buttonRadius: 8,
  buttonShadow: "medium", // none, small, medium, large
  buttonAlign: "left", // left, center, right

  // gallery / images
  galleryAlign: "grid-center", // grid-left, grid-center, grid-right
  imageSpacing: 8,
  imageRadius: 8,
  galleryVisible: true,

  // layout
  cardRadius: 12,
  containerPadding: 20,
  sectionBg: "#ffffff",

  // stroke/border
  strokeColor: "#e6e8f0",
  strokeWeight: 1,

  // layout mode
  layoutMode: "desktop", // desktop | compact

  // sample gallery (images)
  images: [
    "/furniture.jpg",
    "/furniture.jpg",
    "/furniture.jpg"
  ]

};

function App() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const reset = () => setSettings(DEFAULT_SETTINGS);

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.href = dataStr;
    dlAnchor.download = "ui-config.json";
    dlAnchor.click();
  };

  return (
    <div className="app">
      <div className="editor" aria-label="Editor panel">
        <EditorPanel settings={settings} setSettings={setSettings} onReset={reset} onExport={exportJSON} />
      </div>

      <div className="previewWrap">
        <div className="preview" style={{ background: settings.sectionBg, padding: settings.containerPadding }}>
          <PreviewUI settings={settings} setSettings={setSettings} />
        </div>
      </div>
    </div>
  );
}

export default App;
