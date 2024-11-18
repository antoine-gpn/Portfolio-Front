import goweb from "./assets/goweb.png";
import snake from "./assets/snake.png";
import portfolio from "./assets/portfolio.png";
import annexeGoweb from "./assets/goweb-maquettes.png";
import dataflow from "./assets/dataflow.jpg";
import snakeGif from "./assets/snake.gif";
import excel from "./assets/excel.png";
import linguacards from "./assets/linguacards.jpg";

const projects = [
  {
    tag: "portfolio",
    name: "Portfolio - Site Perso",
    technos: ["React JS"],
    image: portfolio,
    links: [],
    description: `Site sur lequel nous nous trouvons actuellement ! 😉`,
  },
  {
    tag: "goweb",
    name: "QuickRepair (Test Technique) ",
    technos: ["Node JS", "React JS"],
    image: goweb,
    links: [
      {
        text: "Repo GitHub",
        url: "https://github.com/antoine-gpn/Quick-Repair",
      },
      {
        text: "Accès au site",
        url: "https://quick-repair.antoine-grappin.fr/",
      },
    ],
    description: `Ce projet a été réalisé dans le cadre d'un test technique pour une entreprise de la métropole lilloise. Le but était de réaliser une solution FullStack de dépannage en ligne (plomberie, électroménager…) avec une liberté totale dans le choix des techno Front et Back. Pour cela, deux ressources étaient fournies : des maquettes Figma à reproduire le plus fidèlement possible ainsi qu'un fichier Excel donnant l'arborescence des choix disponibles. 
    
    Puisque l'entreprise pour laquelle était destiné ce test était très orientée JavaScript, j'ai choisi NodeJS et React pour la Stack Technique. L'idée dans un premier temps, fut de reproduire l'arborescence des choix de dépannage au format JSON pour l'exploiter plus facilement. J'ai ensuite réalisé l'API NodeJS avec deux routes : l'une renvoie le parcours de dépannage en JSON et l'autre permet l'envoi d'un mail récapitualif à la fin du formulaire. Enfin, une fois le Back terminé, j'ai pu reproduire les maquettes Figma sur React en découpant l'appli en 4 composants (L'onboarding => Page d'accueil, L'interface de choix multiple suivant, puis enfin, les deux pages de récapitualif dont la dernière comprend un formulaire pour que le client soit rencontacté.
`,
    annexes: [annexeGoweb, excel],
  },
  {
    tag: "dataflow-iot",
    name: "Dataflow-IOT",
    technos: ["Angular", "Node JS", "Mongo DB"],
    image: dataflow,
    links: [
      {
        text: "Repo GitHub",
        url: "https://github.com/antoine-gpn/dataflow-iot",
      },
      {
        text: "Accès au site",
        url: "https://dataflow-iot.antoine-grappin.fr/",
      },
    ],
    description: `Le projet Dataflow-IOT est né de la refonte d'un projet que j'avais dû réaliser dans le cadre d'un test technique pour une alternance. 
Il était à l'époque réalisé uniquement avec Symfony mais j'ai fait le choix de faire une refonte visuelle via Angular 17.

L'intitulé du test était de créer un Dahsboard simple permettant à un utilisateur de visualiser les données de ses différents objets connectés (IOT).
L'interface se compose simplement d'une liste d'appareil connectés (montres, ampoules…) ainsi que d'un récap des données par temporalité (jour, semaine, mois…).

Le graphique est généré via la Library D3.js et le stockage des données via une base Mongo DB hébergée chez OVH Cloud.
`,
  },
  {
    tag: "snake",
    name: "Snake GUI",
    technos: ["Python"],
    image: snake,
    links: [
      { text: "Repo GitHub", url: "https://github.com/antoine-gpn/Snake" },
    ],
    description: `Le projet Snake a été réalisé sur mon temps libre pour me familiariser avec les interfaces graphiques utilisateur (GUI). Pour cela, j’ai décidé de m’orienter vers Python puisque de nombreuses librairies permettent de réaliser ce genre de projet avec un code de départ plutôt léger et donc facile à prendre en main. Je me suis orienté vers Tkinter, l’une des librairies graphiques les plus populaires dans la communauté Python. 

Une fois la technologie trouvée, il me fallait une idée de projet. J’ai rapidement choisi le jeu Snake puisque les règles sont assez simples mais permettent d'appréhender divers paramètres challengeants d’un point de vue visuel.

J’ai d’abord créé une interface composée d’un damier de 10x10 cases et codé les fonctions permettant de générer le serpent et la pomme. Il a ensuite fallu coder les déplacements et l'agrandissement du serpent, l’apparition aléatoire de la pomme à chaque contact avec le serpent et l’implémentation du Game Over. Sans rentrer dans les détails, les positions du corps du serpent sont représentées sous forme de tableau de tuples (x, y) indiquant la position de chaque carré composant le serpent au format abscisse/ordonnée : [ (1 , 1) , (1 , 2) ... ]
`,
    annexes: [snakeGif],
  },
  {
    tag: "linguacards",
    name: "LinguaCards (A venir)",
    technos: ["Java Spring", "AngularJS"],
    image: linguacards,
    links: [,],
    description: `Site web d'apprentissage des langues à travers un système de cartes de vocabulaire recto-verso`,
  },
];

export default projects;
