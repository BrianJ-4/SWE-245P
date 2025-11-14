import './App.css';
import "./Header.css";
import "./Footer.css";
import "./Sidebar.css";
import "./MainContent.css";

import Header from "./Header";
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;