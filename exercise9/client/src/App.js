import "./App.css";
import "./Header.css";
import "./Footer.css";
import "./Sidebar.css";
import "./MainContent.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import SecondDataView from "./SecondDataView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="second" element={<SecondDataView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;