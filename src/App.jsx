import { Routes, Route } from "react-router-dom";

import Navbarcomponent from "./component/Navbarcomponent";

import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Footercomponent from "./component/Footercomponent";

function App() {
  return (
    <div>
      <Navbarcomponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="article" Component={ArticlePage} />
      </Routes>
      <Footercomponent />
    </div>
  );
}

export default App;
