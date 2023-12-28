import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
