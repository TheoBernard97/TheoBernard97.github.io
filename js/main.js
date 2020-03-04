const modal = [
  {
    id: 1,
    title: "Le Blog de Zozor",
    img: "images/zozor-modal.png",
    tech: "HTML - CSS",
    description:
      "Page d'un blog fictif, ce projet est aussi mon premier projet web.",
    live: "https://theobernard97.github.io/Zozor",
    github: "https://github.com/TheoBernard97/Zozor"
  },
  {
    id: 2,
    title: "Tindog",
    img: "images/tindog-modal.png",
    tech: "HTML - CSS - Bootstrap",
    description:
      "Page de présentation fictive de l'application Tindog, ce projet est mon premier réalisé avec Bootstrap.",
    live: "https://theobernard97.github.io/Tindog",
    github: "https://github.com/TheoBernard97/Tindog"
  },
  {
    id: 3,
    title: "Roll a ball 3D",
    img: "images/roll-modal.png",
    tech: "C# - Unity",
    description:
      "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation.",
    live: "https://theobernard97.itch.io/roll-our-earth",
    github: "https://github.com/TheoBernard97/Roll-a-ball"
  }
];

// Image preloader

modal.map(function(modal) {
  new Image().src = modal.img;
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

document.querySelector("#zozor-button").addEventListener("click", function() {
  changeModalContent(0);
});

document.querySelector("#tindog-button").addEventListener("click", function() {
  changeModalContent(1);
});

document.querySelector("#roll-button").addEventListener("click", function() {
  changeModalContent(2);
});

// Skill animation

const progressBarEnds = [85, 80, 65, 35, 30, 65, 10, 50];
const progressBars = document.querySelectorAll(".progress-bar");
const skillSection = document.querySelector("#compétences");
let checkOnce = false;

window.onscroll = function() {
  if (skillSection.getBoundingClientRect().top <= 500 && checkOnce === false) {
    waitLoop(0);
    checkOnce = true;
  }
};

function waitLoop(i) {
  setTimeout(function() {
    if (i < progressBars.length) {
      progressBars[i].style.width = progressBarEnds[i] + "%";
      progressBars[i].setAttribute("aria-valuenow", progressBarEnds[i]);
      waitLoop(i + 1);
    }
  }, 200);
}
