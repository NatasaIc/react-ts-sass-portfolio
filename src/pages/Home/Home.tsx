import About from "../../components/about/About";
import BurgerNav from "../../components/burger/BurgerNav";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";
import '../../App.scss';
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";


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
