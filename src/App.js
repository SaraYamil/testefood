import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import News from "./pages/news";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Module from "./pages/module";
import View from "./pages/view";
import Resrv from "./pages/resrv";
import ViewProvider from "./ViewProvider";

function App() {
  return (
    <Router>
      <Header />
      <ViewProvider>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resrv" element={<Resrv />} />
          <Route
            path="/view/:id"
            element={
              <ViewProvider>
                <View />
              </ViewProvider>
            }
          />
        </Routes>
      </ViewProvider>
      <Footer />
      <Module />
    </Router>
  );
}

export default App;
