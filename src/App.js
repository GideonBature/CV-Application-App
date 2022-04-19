import "./App.css";
import GenInfo from "./components/GenInfo";
import EduInfo from "./components/EduExp";
import PracExp from "./components/PracExp";

function App() {
  return (
    <div className="App">
      <h1>CV APPLICATION</h1>
      <GenInfo />
      <EduInfo />
      <PracExp />
    </div>
  );
}

export default App;
