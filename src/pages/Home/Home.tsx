// import About from "../../components/about/About";
import BurgerNav from "../../components/burger/BurgerNav";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import '../../App.scss';

function Home() {
  return (
    <>
    <BurgerNav />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
