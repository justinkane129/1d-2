import "./App.scss";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navigation />
      <div className="main">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
