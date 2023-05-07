import './App.scss';
import Nav from "./components/burger/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
    <Nav />
    <Header />
    <main>
    <About />
    <Projects />
    <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
