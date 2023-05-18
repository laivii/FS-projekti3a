function addNew() {
  var date = new Date();
  var usernameInput = document.getElementById("inputUsername");
  var username = usernameInput.value;
  var countryInput = document.getElementById("inputCountry");
  var country = countryInput.value;
  var commentInput = document.getElementById("inputMessage");
  var comment = commentInput.value;

  var content = {
    username: username,
    country: country,
    message: comment,
    date: date,
  };

  var uri = "http://localhost:8080/api/add";

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", uri, true);

  xhttp.onreadystatechange = function () {
    console.log("vittu");
  };

  xhttp.send(JSON.stringify(content));

  username = "";
  country = "";
  comment = "";
}

function NewComment() {
  return (
    <>
      <h2>New Comment</h2>
      <div className="container">
        <form class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              name="username"
              class="form-control"
              id="inputUsername"
              placeholder="Username"
            ></input>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              name="country"
              class="form-control"
              id="inputCountry"
              placeholder="Country"
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              name="your-comment"
              class="form-control"
              id="inputMessage"
              placeholder="Write your comment here..."
            ></input>
          </div>
          <div class="col-12">
            <button
              onClick={addNew}
              type="button"
              name="submit-button"
              class="btn btn-secondary"
              id="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewComment;
