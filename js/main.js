let modalTitleList = ["Le Blog de Zozor", "Tindog", "Roll a ball 3D"];
let modalImageList = [
  "images/zozor-modal.png",
  "images/tindog-modal.png",
  "images/roll-modal.png"
];
let modalTechList = ["HTML - CSS", "HTML - CSS - Bootstrap", "C# - Unity"];
let modalDescriptionList = [
  "Page d'un blog fictif, ce projet est aussi mon premier projet web.",
  "Page de présentation fictive de l'application Tindog, ce projet est mon premier réalisé avec Bootstrap.",
  "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation."
];
let modalButtonLiveList = [
  "https://theobernard97.github.io/Zozor",
  "https://theobernard97.github.io/Tindog",
  "https://theobernard97.itch.io/roll-our-earth"
];
let modalButtonList = [
  "https://github.com/TheoBernard97/Zozor",
  "https://github.com/TheoBernard97/Tindog",
  "https://github.com/TheoBernard97/Roll-a-ball"
];

// Image preloader

function preload(url) {
  new Image().src = url;
}

for (let i = 0; i < modalImageList.length; i++) {
  preload(modalImageList[i]);
}

// Change the content of the modal when the user click on "Learn more"

function changeModalContent(x) {
  document.querySelector("#exampleModalCenterTitle").innerHTML =
    modalTitleList[x];
  document.querySelector("#modal-image").src = modalImageList[x];
  document.querySelector("#modal-tech-list").innerHTML = modalTechList[x];
  document.querySelector("#modal-description").innerHTML =
    modalDescriptionList[x];
  document.querySelector("#modal-live-button").href = modalButtonLiveList[x];
  document.querySelector("#modal-button").href = modalButtonList[x];
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

const progressBarEnds = [80, 80, 65, 20, 10, 65, 10, 50];
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
