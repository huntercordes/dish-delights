import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"; /* support github */
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import RecipeLists from "./components/RecipeLists";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/recipes" element={<Recipes />}>
    <Route index element={<RecipeLists />} /> 
    <Route path=":id" element={<RecipeDetails />} />
  </Route>

       <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
