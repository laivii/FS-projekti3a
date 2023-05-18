function getInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:8080/api/getall", true);

  xhttp.onreadystatechange = function () {
    var data = JSON.parse(xhttp.response);
    var cards = MakeCards(data);
    document.getElementById("forum").innerHTML = cards;
  };

  xhttp.send();
}

function MakeCards(data) {
  var messages = data;
  var cards = "<div class='row'>";

  for (let i = 0; i < messages.length; i++) {
    var info = messages[i];
    var date = JSON.stringify(info["date"]);

    cards += `
      <div class="col-sm-6">
          <div class="card">
              <div class="card-header" id="${info["_id"]}">
                  <p class="commentator text-muted">${info["username"]}, ${info["country"]}</p>
                  <button type="button" class="btn delete text-muted" aria-label="Close"><i class="bi-trash"></i></button>
                  <button type="button" class="btn update text-muted" aria-label="Update"><i class="bi-pencil-square"></i></button>
                  <button type="button" id="save" class="btn save hidden text-muted" aria-label="Save"><i class="bi-save"></i></button>
              </div>
              <div class="card-body">
                  <textarea id="message" class="card-text" disabled>${info["message"]}</textarea>
              </div>
              <div class="card-footer">
                  <p class="mb-2 text-muted"> <span id="updated" class="hidden">updated</span> ${date}</p>
              </div>
          </div>
      </div>`;
  }

  cards += "</div>";

  return cards;
}

function Cards() {
  getInfo();
}

export default Cards;
