import Movies from '../assets/movies2.png';
// import Todo from '../assets/todo.png';
// import Zoo from '../assets/zoo.png';
import Hangman from '../assets/hangman.png';

export interface IProjects {
    id: number;
    title: string;
    img: string;
    github_url: string;
}


export const projects = [
    {
      id: 1,
      title: "Fullstack Movie App",
      img: `${Movies}`,
      github_url: "https://github.com/NatasaIc/fullstack-applikation-express.git",
      html: "-",
      css: "45.9%",
      typescript: "30.5%",
      handlebars: "23.6%",
    },
    {
      id: 5,
      title: "Hangman Game",
      img: `${Hangman}`,
      github_url: "https://github.com/NatasaIc/react-ts-hangman.git",
      html: "16.7%",
      css: "13.2%",
      typescript: "70.1%",
      handlebars: "-",
    },
  ];

  export const getAllProjects = () => {
    return projects
  }