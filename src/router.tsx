import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
             {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])