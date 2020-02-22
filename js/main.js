function preload(url) {
  new Image().src = url;
}

preload("images/zozor-modal.png");
preload("images/tindog-modal.png");
preload("images/roll-modal.png");

function zozorFunction() {
  document.getElementById("exampleModalCenterTitle").innerHTML =
    "Le Blog de Zozor";
  document.getElementById("modal-image").src = "images/zozor-modal.png";
  document.getElementById("modal-tech-list").innerHTML = "HTML - CSS";
  document.getElementById("modal-description").innerHTML =
    "Page d'un blog fictif, ce projet est aussi mon premier projet front-end.";
  document.getElementById("modal-button").href =
    "https://github.com/TheoBernard97/Zozor";
}

function tindogFunction() {
  document.getElementById("exampleModalCenterTitle").innerHTML = "Tindog";
  document.getElementById("modal-image").src = "images/tindog-modal.png";
  document.getElementById("modal-tech-list").innerHTML =
    "HTML - CSS - Bootstrap";
  document.getElementById("modal-description").innerHTML =
    "Page de présentation fictive de l'application Tindog, ce projet est mon plus récent. C'est également le premier réalisé avec Bootstrap.";
  document.getElementById("modal-button").href =
    "https://github.com/TheoBernard97/Tindog";
}

function rollFunction() {
  document.getElementById("exampleModalCenterTitle").innerHTML =
    "Roll a ball 3D";
  document.getElementById("modal-image").src = "images/roll-modal.png";
  document.getElementById("modal-tech-list").innerHTML = "C# - Unity";
  document.getElementById("modal-description").innerHTML =
    "Jeu de plateforme 3D, ce projet de 2015 est mon tout premier. C'est à cette occasion que j'ai découvert les bases de la programmation.";
  document.getElementById("modal-button").href =
    "https://github.com/TheoBernard97/Roll-a-ball";
}
