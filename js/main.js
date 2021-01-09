const modal = [
  {
    id: 1,
    title: "Fylo",
    img: "images/fylo-modal.png",
    tech: "HTML - Sass",
    button: "#fylo-button",
    description:
      "Page de présentation fictive du service Fylo, ce projet était pour moi un moyen de pratiquer Sass et CSS grid.",
    live: "https://theobernard97.github.io/Fylo",
    github: "https://github.com/TheoBernard97/Fylo",
  },
  {
    id: 2,
    title: "Tindog",
    img: "images/tindog-modal.png",
    tech: "HTML - CSS - Bootstrap",
    button: "#tindog-button",
    description:
      "Page de présentation fictive de l'application Tindog, ce projet est mon premier réalisé avec Bootstrap.",
    live: "https://theobernard97.github.io/Tindog",
    github: "https://github.com/TheoBernard97/Tindog",
  },
  {
    id: 3,
    title: "KeeperApp",
    img: "images/keeper-modal.png",
    tech: "React.js - CSS",
    button: "#keeper-button",
    description:
      "Application web de prise de notes, KeeperApp est mon premier projet développé avec React.",
    live: "https://theobernard97.github.io/KeeperApp",
    github: "https://github.com/TheoBernard97/KeeperApp",
  },
  {
    id: 4,
    title: "Ghiblib",
    img: "images/ghiblib-modal.png",
    tech: "React.js - Redux",
    button: "#ghiblib-button",
    description:
      "Site de présentation du Studio Ghibli, ce projet est réalisé avec React, Redux et récupere les données liées aux films via une API publique.",
    live: "https://theobernard97.github.io/Ghiblib",
    github: "https://github.com/TheoBernard97/Ghiblib",
  },
  {
    id: 5,
    title: "Roll a ball 3D",
    img: "images/roll-modal.png",
    tech: "C# - Unity",
    button: "#roll-button",
    description:
      "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation.",
    live: "https://theobernard97.itch.io/roll-our-earth",
    github: "https://github.com/TheoBernard97/Roll-a-ball",
  },
];

// Image preloader

modal.map((modal) => (new Image().src = modal.img));

// Skill animation

const progressBarEnds = [85, 80, 70, 70, 50, 40, 40, 60];
const progressBars = document.querySelectorAll(".progress-bar");
const skillSection = document.querySelector("#compétences");
let checkOnce = false;

window.onscroll = () => {
  if (skillSection.getBoundingClientRect().top <= 500 && checkOnce === false) {
    waitLoop(0);
    checkOnce = true;
  }
};

function waitLoop(i) {
  setTimeout(() => {
    if (i < progressBars.length) {
      progressBars[i].style.width = progressBarEnds[i] + "%";
      progressBars[i].setAttribute("aria-valuenow", progressBarEnds[i]);
      waitLoop(i + 1);
    }
  }, 200);
}

// Add an event listener on each "Learn more" button

modal.forEach((element) => {
  document.querySelector(element.button).addEventListener("click", () => {
    changeModalContent(element.id - 1);
  });
});

// Change the content of the modal when the user click on "Learn more"

function changeModalContent(x) {
  document.querySelector("#exampleModalCenterTitle").innerHTML = modal[x].title;
  document.querySelector("#modal-image").src = modal[x].img;
  document.querySelector("#modal-tech-list").innerHTML = modal[x].tech;
  document.querySelector("#modal-description").innerHTML = modal[x].description;
  document.querySelector("#modal-live-button").href = modal[x].live;
  document.querySelector("#modal-button").href = modal[x].github;
}
