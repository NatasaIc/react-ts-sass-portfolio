import { Outlet } from "react-router-dom";
import './App.scss';
import Nav from "./components/burger/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Nav />
    <Header />
    <main>
        <Outlet></Outlet>
    </main>
     <Footer />
    </>
  );
}

export default App;
