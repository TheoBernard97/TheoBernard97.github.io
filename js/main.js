let modalTitleList = ["Le Blog de Zozor", "Tindog", "Roll a ball 3D"];
let modalImageList = [
  "images/zozor-modal.png",
  "images/tindog-modal.png",
  "images/roll-modal.png"
];
let modalTechList = ["HTML - CSS", "HTML - CSS - Bootstrap", "C# - Unity"];
let modalDescriptionList = [
  "Page d'un blog fictif, ce projet est aussi mon premier projet front-end.",
  "Page de présentation fictive de l'application Tindog, ce projet est mon plus récent. C'est également le premier réalisé avec Bootstrap.",
  "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation."
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
  document.querySelector("#modal-button").href = modalButtonList[x];
}

function zozorFunction() {
  changeModalContent(0);
}

function tindogFunction() {
  changeModalContent(1);
}

function rollFunction() {
  changeModalContent(2);
}
