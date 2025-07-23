import critter from "../assets/critter.png";
import hangman from "../assets/hangman.png";
import engine from "../assets/engine.png";
import frontoGame from "../assets/frontoGame.png";
import fruitninja from "../assets/fruitNinja.png";
import valowiki from "../assets/valowiki.png"
import portfolio from "../assets/portfolio.png";
import gdd from "../assets/gdd.png"


const projects = [
  {
    key: "hangman",
    image: hangman,
    technologies: ["Python"],
    github: "https://github.com/Itsdeusi06/GitHub-Codedex/tree/main/PROJECT"
  },
  {
    key: "timberman",
    image: "https://venturebeat.com/wp-content/uploads/2014/09/timberman.jpg",
    technologies: ["C++", "SFML"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Timber"
  },
  {
    key: "critter",
    image: critter,
    technologies: ["C++"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/mascota"
  },
  {
    key: "engine",
    image: engine,
    technologies: ["C++"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Motor"
  },
  {
    key: "breakdown",
    image: frontoGame,
    technologies: ["C++", "SFML"],
    github: "https://github.com/Itsdeusi06/CPP/tree/main/Fronto_game"
  },
  {
    key: "fruitninja",
    image: fruitninja,
    technologies: ["Unity", "C#", "MySQL", "Firebase", "XML", "Json"],
    github: "https://github.com/Itsdeusi06/Unity"
  },
  {
    key: "valowiki",
    image: valowiki,
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/Itsdeusi06/ValoWiki",
    demo: "https://itsdeusi06.github.io/ValoWiki/"
  },
  {
    key: "portfolio",
    image: portfolio,
    technologies: ["React", "Firebase Hosting", "Firebase Realtime DB"],
    github: "https://github.com/Itsdeusi06/MyWeb",
    demo: "https://portfolio-2e91d.web.app/"
},
{
  key: "gdd",
  image: gdd,
  technologies: ["GDD", "Team work"],
  demo: "https://drive.google.com/file/d/1j3wsSQaLtM4fe8edk_Z9OenHt_lBM-FW/view?usp=sharing"
}
];

export default projects;
