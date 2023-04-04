import About from "../../components/about/About";
import BurgerNav from "../../components/burger/BurgerNav";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";
import '../../App.scss';

function Home() {
  return (
    <>
    <BurgerNav />
    <Header />
    <About />
    <Projects />
    <footer></footer>
    </>
  )
}

export default Home
