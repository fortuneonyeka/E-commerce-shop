import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={Home }/>
          <Route path="/about" element={About}/>
          <Route path="/contact" element={Contact}/>
          <Route path="/product" element={Product}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
