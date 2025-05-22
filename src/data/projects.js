import critter from "../assets/critter.png";
import hangman from "../assets/hangman.png";
import engine from "../assets/engine.png";
import frontoGame from "../assets/frontoGame.png";
const projects = [
  {
    title: "Hang Man",
    description: "Fist project in Python. A simple game where you have to guess a word by suggesting letters within a certain number of guesses. In this project, I learned how to use functions, loops and conditionals in Python.",
    image: hangman,
    technologies: ["Python"],
    github: "https://github.com/Itsdeusi06/GitHub-Codedex/tree/main/PROJECT",
  },
  {
    title: "Timber Man",
    description: "A simple game where you have to cut trees and avoid branches. The game is made in cpp and is a clone of the original Timberman game. In this project, I learned how to use classes and objects in C++.",
    image: "https://venturebeat.com/wp-content/uploads/2014/09/timberman.jpg",
    technologies: ["C++", "SFML"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Timber"
  },
  {
    title: "Critter",
    description: "A simple game where you have to take care of a pet. The game is made in cpp and is a clone of the original Tamagotchi game. In this project, I learned how to use classes, objects and pointers and memory manipulation in C++.",
    image: critter,
    technologies: ["C++"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/mascota"
  },
  {
    title: "Engine",
    description: "This is a lightweight 2D game engine developed from scratch using C++. The goal was to understand and implement the core systems that power real-time games. It includes a custom game loop, input handling, sprite rendering, collision detection, and basic entity management.",
    image: engine,
    technologies: ["C++"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Motor"
  },
  {
    title: "Break down",
    description: "A simple game where you have to break blocks. The game is made in cpp and is a clone of the original Breakout game. In this project, I learned how to work with more people in a project.",
    image: frontoGame,
    technologies: ["C++", "SFML"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Fronto_game"
  }
  // más proyectos...
];
export default projects;