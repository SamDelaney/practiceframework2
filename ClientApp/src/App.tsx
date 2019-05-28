import React from "react";

import "./App.css";
import Localizer from "./localization/localizationWrapper";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Localizer />
      </header>
    </div>
  );
};

export default App;
