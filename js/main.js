const modal = [
  {
    id: 1,
    title: "Fylo",
    img: "images/fylo-modal.png",
    tech: "HTML - CSS - Sass",
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
    description:
      "Application web de prise de notes, KeeperApp est mon premier projet développé avec React.",
    live: "https://theobernard97.github.io/KeeperApp",
    github: "https://github.com/TheoBernard97/KeeperApp",
  },
  {
    id: 4,
    title: "Roll a ball 3D",
    img: "images/roll-modal.png",
    tech: "C# - Unity",
    description:
      "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation.",
    live: "https://theobernard97.itch.io/roll-our-earth",
    github: "https://github.com/TheoBernard97/Roll-a-ball",
  },
];

// Image preloader

modal.map((modal) => (new Image().src = modal.img));

// Change the content of the modal when the user click on "Learn more"

function changeModalContent(x) {
  document.querySelector("#exampleModalCenterTitle").innerHTML = modal[x].title;
  document.querySelector("#modal-image").src = modal[x].img;
  document.querySelector("#modal-tech-list").innerHTML = modal[x].tech;
  document.querySelector("#modal-description").innerHTML = modal[x].description;
  document.querySelector("#modal-live-button").href = modal[x].live;
  document.querySelector("#modal-button").href = modal[x].github;
}

document.querySelector("#fylo-button").addEventListener("click", () => {
  changeModalContent(0);
});

document.querySelector("#tindog-button").addEventListener("click", () => {
  changeModalContent(1);
});

document.querySelector("#keeper-button").addEventListener("click", () => {
  changeModalContent(2);
});

document.querySelector("#roll-button").addEventListener("click", () => {
  changeModalContent(3);
});

// Skill animation

const progressBarEnds = [85, 80, 70, 70, 30, 45, 65, 50];
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
