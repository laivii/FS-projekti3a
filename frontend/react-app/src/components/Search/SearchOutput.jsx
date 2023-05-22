//Funtio haetun tiedon etsittämistä varten

function SeachOutput(data) {
  var container = document.getElementById("SearchOutput");
  var info = data;

  var modal = document.createElement("div");
  modal.className = "modal";
  modal.tabIndex = "-1";

  var modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  var modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  var modalHeading = document.createElement("h5");
  modalHeading.className = "modal-title";
  modalHeading.innerText = data[0][username];
  modalHeader.appendChild(modalHeading);

  var closeButton = document.createElement("button");
  closeButton.className = "btn-close";
  closeButton.type = "button";
  closeButton.ariaLabel = "close";
  modalHeader.appendChild(closeButton);

  modalContent.appendChild(modalHeader);

  var modalBody = document.createElement("div");
  modalBody.className = "modal-body";
}

export default SeachOutput;
