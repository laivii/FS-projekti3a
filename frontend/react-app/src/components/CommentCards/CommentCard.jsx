//Komponentti kommettien korteille
import "./Cards.css";

//Funktio tiedon hakua varten
function getInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8080/api/getall", true);

  xhttp.onreadystatechange = function () {
    try {
      var data = JSON.parse(xhttp.response);
    } catch (error) {
      console.log(error);
      return;
    }
    var cards = MakeCards(data);
    var forum = document.getElementById("forum");
    forum.innerHTML = "";
    forum.appendChild(cards);
  };

  xhttp.send();
}

//Funktio korttien luomista varten
function MakeCards(data) {
  var messages = data;
  var cards = document.createElement("div");
  cards.className = "row";

  for (let i = 0; i < messages.length; i++) {
    var info = messages[i];
    var date = JSON.stringify(info["date"]);
    var day = date.substring(1, 11);
    var time = date.substring(12, 20);

    var container = document.createElement("div");
    container.className = "col-sm-6";

    var card = document.createElement("div");
    card.className = "card";

    var cardheader = document.createElement("div");
    cardheader.className = "card-header";
    cardheader.id = info["_id"];

    var commentator = document.createElement("p");
    commentator.className = "commentator text-muted";
    commentator.innerText = info["username"] + ", " + info["country"];
    cardheader.appendChild(commentator);

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn delete text-muted";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", deleteDocument);

    var deleteIcon = document.createElement("i");
    deleteIcon.className = "bi-trash";
    deleteButton.appendChild(deleteIcon);
    cardheader.appendChild(deleteButton);

    var updateButton = document.createElement("button");
    updateButton.className = "btn update text-muted";
    updateButton.type = "button";
    updateButton.addEventListener("click", updateDocument);

    var updateIcon = document.createElement("i");
    updateIcon.className = "bi-pencil-square";
    updateButton.appendChild(updateIcon);
    cardheader.appendChild(updateButton);

    var saveButton = document.createElement("button");
    saveButton.className = "btn save hidden text-muted";
    saveButton.type = "button";
    saveButton.id = "save";
    saveButton.addEventListener("click", saveDocument);

    var saveIcon = document.createElement("i");
    saveIcon.className = "bi-save";
    saveButton.appendChild(saveIcon);
    cardheader.appendChild(saveButton);

    card.appendChild(cardheader);

    var cardbody = document.createElement("div");
    cardbody.className = "card-body";

    var message = document.createElement("textarea");
    message.className = "car-text";
    message.id = "message";
    message.disabled = "true";
    message.innerText = info["message"];

    cardbody.appendChild(message);
    card.appendChild(cardbody);

    var cardfooter = document.createElement("div");
    cardfooter.className = "card-footer";

    var timestamp = document.createElement("p");
    timestamp.className = "mb-2 text-muted";
    timestamp.innerText += day + " " + time + " ";

    var updated = document.createElement("span");
    updated.className = "hidden";
    updated.id = "updated";
    updated.innerText = "updated";

    timestamp.appendChild(updated);

    cardfooter.appendChild(timestamp);
    card.appendChild(cardfooter);

    container.appendChild(card);
    cards.appendChild(container);
  }

  return cards;
}

export { MakeCards };

//Funktio, jossa kutsutaan tietojen hakua§
function Cards() {
  getInfo();
}

//Funktio kommentin/dokumentin poistamiseen
function deleteDocument() {
  var id = this.parentElement.id;

  var uri = "http://localhost:8080/api/delete/" + id;

  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", uri, false);

  xhttp.onreadystatechange = function () {
    window.location.href = "http://localhost:5173";
  };

  xhttp.send();
}

//Funktio kommentin/dokumentin viestin päivittämiseen
function updateDocument() {
  let card_header = this.parentElement;
  let this_card = card_header.parentElement;
  var element = this_card.querySelector("#message");

  card_header.querySelector("#save").classList.remove("hidden");

  if (element.disabled == true) {
    element.disabled = false;
  }
}

//Funktio kommentin tallentamiseen
function saveDocument() {
  var id = this.parentElement.id;
  let card_header = this.parentElement;
  let this_card = card_header.parentElement;

  var element = this_card.querySelector("#message");

  var message = element.value;

  var uri = "http://localhost:8080/api/update/" + id;

  var xhttp = new XMLHttpRequest();
  xhttp.open("PUT", uri, true);
  xhttp.setRequestHeader("Content-Type", "application/json");

  xhttp.onreadystatechange = function () {
    this_card.querySelector("#updated").classList.remove("hidden");
    element.disabled = true;
    //window.location.href = '/';
  };

  const updates = JSON.stringify({
    message: message,
    time: new Date(),
  });

  xhttp.send(updates);

  card_header.querySelector("#save").classList.add("hidden");
}

export default Cards;
