import "./App.css";
import BodyContainer from "./components/body/BodyContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

<link rel="manifest" href="/manifest.json" />;

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
