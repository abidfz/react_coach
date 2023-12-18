import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Price from "./components/Price/Price";
import Review from "./components/Review/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Price />
      <Review />
    </div>
  );
}

export default App;
