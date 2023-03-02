import Menu from "./components/Menu";
import Image from "./components/ImageWeb3";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Menu />
      <div id="romario">
        <Image />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
